new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('exibindo alerta')
        },
        armazena(evemt){
            this.valor = event.target.value
            return this.valor
        }
    }
})