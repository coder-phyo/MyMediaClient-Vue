import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name: "NewsDetails",
    data() {
        return {
            postId: 0,
            post: {},
            tokenStatus: false,
            viewCount: 0,
        };
    },
    computed: {
        ...mapGetters(["storageToken", "storageUserData"])
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
        },

        logout() {
            this.$store.dispatch("setToken", null);
            this.login();
        },
        checkToken() {
            if (
                this.storageToken !== null &&
                this.storageToken !== undefined &&
                this.storageToken !== ""
            ) {
                this.tokenStatus = true;
            } else {
                this.tokenStatus = false;
            }
        },

        viewCountLoad() {
            let data = {
                userId: this.storageUserData.id,
                postId: this.$route.query.newsId
            };
            axios.post("http://localhost:8000/api/post/actionLog", data).then(response => {
                this.viewCount = response.data.posts.length;
            }).catch(error => console.log(error));
        }
    },
    mounted() {
        this.viewCountLoad();
        this.checkToken();
        this.postId = this.$route.query.newsId;
        this.loadPost(this.postId);
    },
};