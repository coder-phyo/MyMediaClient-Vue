import axios from "axios"
export default {
    name: 'LoginPage',
    data() {
        return {
            userData: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
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

        accountLogin() {
            axios.post("http://localhost:8000/api/user/login", this.userData).then(response => {
                if (response.data.token === null) {
                    console.log("There is no user");
                } else {
                    console.log("login success...");
                }
            }).catch(error => console.log(error));
        }
    }
}