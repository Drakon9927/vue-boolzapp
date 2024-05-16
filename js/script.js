const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],  
        }
    },
    methods: {
       
    },
    mounted() {
        console.log("App montata");

        // Ciclo per ottenere 10 email
        for (let i = 0; i < 10; i++) {
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then(response => {
                    this.emails.push(response.data.response);  
                })
        }
    }
}).mount(`#app`)