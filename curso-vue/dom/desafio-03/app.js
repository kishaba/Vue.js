new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado () {
            // if (this.valor == 37) {
            //     return 'Valor eh igual a 37'
            // }
            // else {
            //     return 'Valor eh diferente de 37'
            // }
            return this.valor == 37 ? 'Valor igual' : 'Valor diferente'
        }

    },
    watch: {
        resultado (novo, antigo) {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }

    },


});