const { createApp } = Vue

createApp({
    data() {
        return {
        contatti: [
            { nome: "Marco", img: "./img/avatar_1.jpg" },
            { nome: "Fabio", img: "./img/avatar_2.jpg" },
            { nome: "Samuele", img: "./img/avatar_3.jpg" },
            { nome: "Alessandro B.", img: "./img/avatar_4.jpg" },
            { nome: "Alessandro L.", img: "./img/avatar_5.jpg" },
            { nome: "Claudia", img: "./img/avatar_6.jpg" },
            { nome: "Federico", img: "./img/avatar_7.jpg" },
            { nome: "Davide", img: "./img/avatar_8.jpg" },
        ]
        }
    },
    methods: {
       
    },
    mounted() {
       

    }
}).mount(`#app`)