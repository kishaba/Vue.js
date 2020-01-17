new Vue({
  el: '#desafio',
  data: {
    nome: 'Alexandre',
    idade: '31',
    imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2012/07/cachorro2.jpg'
  },
  methods: {
    multiplicaIdade() {
      this.idadeMultiplicada = this.idade*3
      return this.idade*3
    },
    exibeNumeroRandom(){
      return Math.random()
    }
  }
})
