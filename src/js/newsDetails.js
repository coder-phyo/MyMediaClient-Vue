import axios from "axios";
export default {
    name: "NewsDetails",
    data() {
        return {
            postId: 0,
            post: {},
        };
    },
    methods: {
        loadPost(id) {
            let post = {
                postId: id,
            };
            axios
                .post("http://localhost:8000/api/post/details", post)
                .then((response) => {
                    if (response.data.post.image === null) {
                        response.data.post.image =
                            "http://localhost:8000/defaultImg/default-image.jpg";
                    } else {
                        response.data.post.image =
                            "http://localhost:8000/storage/postImage/" +
                            response.data.post.image;
                    }
                    this.post = response.data.post;
                    console.log(this.post);
                })
                .catch((err) => console.log(err));
        },

        back() {
            history.back();
        },

        home() {
            this.$router.push({
                name: 'home'
            })
        },

        login() {
            this.$router.push({
                name: 'login'
            })
        }
    },
    mounted() {
        this.postId = this.$route.query.newsId;
        this.loadPost(this.postId);
    },
};