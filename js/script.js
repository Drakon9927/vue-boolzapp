const { createApp } = Vue

createApp({
    data() {
        return {
            contatti: [
                { 
                    nome: "Marco", 
                    img: "./img/avatar_1.jpg",
                    messaggi: [
                        { testo: "Ciao!", inviato: true },
                        { testo: "Come stai?", inviato: true },
                        { testo: "Bene, grazie! E tu?", inviato: false },
                    ],
                },
                { 
                    nome: "Fabio", 
                    img: "./img/avatar_2.jpg",
                    messaggi: [
                        { testo: "Hai visto il film?", inviato: true },
                        { testo: "No, non ancora.", inviato: false },
                    ],
                },
                { 
                    nome: "Samuele", 
                    img: "./img/avatar_3.jpg",
                    messaggi: [
                        { testo: "Tutto bene oggi?", inviato: true },
                        { testo: "Si, grazie! Tu?", inviato: false },
                    ],
                },
                { 
                    nome: "Alessandro B.", 
                    img: "./img/avatar_4.jpg",
                    messaggi: [
                        { testo: "Hey", inviato: true },
                        { testo: "Oggi le hai fatte almeno 4 ore di boxing?", inviato: true },
                        { testo: "Ma ceeeeerto.", inviato: false },
                    ],
                },
                { 
                    nome: "Alessandro L.", 
                    img: "./img/avatar_5.jpg",
                    messaggi: [
                        { testo: "Ciao!", inviato: true },
                        { testo: "Ti aspetto alle 16", inviato: true },
                        { testo: "Forse ritardo 10 minuti.", inviato: false },
                        { testo: "ok", inviato: true },
                    ],
                },
                { 
                    nome: "Claudia", 
                    img: "./img/avatar_6.jpg",
                    messaggi: [
                        { testo: "Ciao!", inviato: true },
                        { testo: "Ti aspetto alle 17", inviato: true },
                        { testo: "Forse ritardo 20 minuti.", inviato: false },
                    ],
                },
                { 
                    nome: "Federico", 
                    img: "./img/avatar_7.jpg",
                    messaggi: [
                        { testo: "Hey hai mangiato?", inviato: true },
                        { testo: "sisi", inviato: false },
                        { testo: "ok", inviato: true },
                    ],
                },
                { 
                    nome: "Davide", 
                    img: "./img/avatar_8.jpg",
                    messaggi: [
                        { testo: "Ciao!", inviato: true },
                        { testo: "Ti aspetto alle 16", inviato: true },
                        { testo: "Forse ritardo 10 minuti.", inviato: false },
                        { testo: "ok", inviato: true },
                    ],
                }
            ],
            contattoAttivo: null,
            nuovoMessaggio: ''
        }
    },
    methods: {
        selezionaContatto(i) {
            this.contattoAttivo = this.contatti[i];
        },
        
        inviaMessaggio() {
            if (this.nuovoMessaggio.trim() !== '') {
                this.contattoAttivo.messaggi.push({
                    testo: this.nuovoMessaggio,
                    inviato: true
                });
                this.nuovoMessaggio = '';
                this.rispostaAutomatica();
            }
        },
        rispostaAutomatica() {
            setTimeout(() => {
                this.contattoAttivo.messaggi.push({
                    testo: 'ok',
                    inviato: false
                });
            }, 1000);
        }
    },
    mounted() {
        this.contattoAttivo = this.contatti[0];
    }
}).mount('#app')