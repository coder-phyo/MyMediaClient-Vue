import axios from "axios";
export default {
    name: "HomePage",
    data() {
        return {
            postLists: [],
        }
    },
    methods: {
        getPost() {
            axios.get('http://localhost:8000/api/allPostList').then(response => {
                for (let i = 0; i < response.data.post.length; i++) {
                    if (response.data.post[i].image === null) {
                        response.data.post[i].image = "http://localhost:8000/defaultImg/default-image.jpg";
                    } else {
                        response.data.post[i].image = "http://localhost:8000/storage/postImage/" + response.data.post[i].image;
                    }
                }
                this.postLists = response.data.post;
            });
        }
    },
    mounted() {
        this.getPost();
    }
};