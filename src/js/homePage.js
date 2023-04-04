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
                this.postLists = response.data.post;
                console.log(this.postLists);
            });
        }
    },
    mounted() {
        this.getPost();
    }
};