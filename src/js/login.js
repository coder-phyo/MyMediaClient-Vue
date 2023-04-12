export default {
    name: 'LoginPage',
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
        }
    }
}