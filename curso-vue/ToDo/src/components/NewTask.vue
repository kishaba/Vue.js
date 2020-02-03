<template>
  <div class="new-task">
    <input
      v-model='name'
      @keydown.enter='add'
      type="text"
      class='form-element'
      placeholder="Nova tarefa?"
    >
    <button
      class='botao'
      @click="add"
    >+</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    add () {
      this.$emit('taskAdded', { name: this.name })
      this.name = ''

    }
  }

}
</script>

<style>
.new-task {
  margin: 35px;
}
.form-element {
  outline: none;
  font-size: 2rem;
  padding: 5px 10px 8px;
  color: #fff;
}
input.form-element {
  border-right: none;
  width: 500px;
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.botao{
  outline: none;
  font-size: 2rem;
  padding: 5px 10px 8px;
  color: #fff;
  border-left: none;
  background-color: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>