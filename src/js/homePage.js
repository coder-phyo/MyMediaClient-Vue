import axios from "axios";
export default {
    name: "HomePage",
    data() {
        return {
            message: "This is testing"
        }
    },

    mounted() {
        axios.get('http://localhost:8000/api/allPostList').then(response => {
            console.log(response.data);
        })
    }
};