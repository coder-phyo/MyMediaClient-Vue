import axios from "axios";
export default {
    name: "HomePage",
    data() {
        return {
            postLists: [],
            categoryLists: [],
            searchKey: "",
        };
    },
    methods: {
        getPost() {
            axios
                .get("http://localhost:8000/api/allPostList")
                .then((response) => {
                    for (let i = 0; i < response.data.post.length; i++) {
                        if (response.data.post[i].image === null) {
                            response.data.post[i].image =
                                "http://localhost:8000/defaultImg/default-image.jpg";
                        } else {
                            response.data.post[i].image =
                                "http://localhost:8000/storage/postImage/" +
                                response.data.post[i].image;
                        }
                    }
                    this.postLists = response.data.post;
                })
                .catch((e) => console.log(e));
        },

        getCategory() {
            axios
                .get("http://localhost:8000/api/allCategory")
                .then((response) => {
                    this.categoryLists = response.data.category;
                })
                .catch((e) => console.log(e));
        },

        search() {
            let search = {
                key: this.searchKey,
            };
            axios
                .post("http://localhost:8000/api/post/search", search)
                .then((response) => {
                    for (let i = 0; i < response.data.searchValue.length; i++) {
                        if (response.data.searchValue[i].image === null) {
                            response.data.searchValue[i].image =
                                "http://localhost:8000/defaultImg/default-image.jpg";
                        } else {
                            response.data.searchValue[i].image =
                                "http://localhost:8000/storage/postImage/" +
                                response.data.searchValue[i].image;
                        }
                    }
                    this.postLists = response.data.searchValue;
                });
        },

        categorySearch(searchKey) {
            let search = {
                key: searchKey,
            };

            axios
                .post("http://localhost:8000/api/category/search", search)
                .then((response) => {
                    for (let i = 0; i < response.data.result.length; i++) {
                        if (response.data.result[i].image === null) {
                            response.data.result[i].image =
                                "http://localhost:8000/defaultImg/default-image.jpg";
                        } else {
                            response.data.result[i].image =
                                "http://localhost:8000/storage/postImage/" +
                                response.data.result[i].image;
                        }
                    }
                    this.postLists = response.data.result;
                })
                .catch((err) => console.log(err));
        },

        newsDetails(id) {
            this.$router.push({
                name: 'newsDetails',
                query: {
                    newsId: id
                }
            })
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
        this.getPost();
        this.getCategory();
    },
};