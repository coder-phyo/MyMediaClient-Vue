import axios from "axios"
import { mapGetters } from "vuex"
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
    computed: {
        ...mapGetters(["storageToken", "storageUserData"])
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
                    this.storeUserInfo(response);
                }
            }).catch(error => console.log(error));
        },

        storeUserInfo(response) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch("setUserData", response.data.user);
            console.log("Token stored Success....");
        },
    }
}