<template>
  <div>
      <input type="text" v-model="newTodoText" @keydown.enter="createTodo"/>
  </div>

</template>

<script>
export default {
    name: 'index',

    data() {
        return {
            newTodoText: ''
        };
    },

    methods: {
        createTodo(){
            this.$store.commit('CREATE_TODO', {
                text: this.newTodoText
            });

            this.newTodoText = '';
        }
    }
  
}
</script>

<style scoped>

</style>



