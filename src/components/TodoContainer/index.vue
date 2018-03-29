<template>
  <div>
      <NewTodoForm></NewTodoForm>
      <TodoItem v-for="id in $store.state.ids"
        :key="id"
        :todo="$store.state.todos[id]"
        @click.native="complete(id)">

      </TodoItem>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
import NewTodoForm from './components/NewTodoForm'

export default {
    name: 'index',
    components: {
        TodoItem,
        NewTodoForm
    },
    methods: {
        complete(id) {
            this.$store.commit('TOOGLE_COMPLETE', { id })
        }
    }
  
}
</script>

<style scoped>

</style>


