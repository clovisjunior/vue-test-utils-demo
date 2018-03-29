<template>
  <div id="app">
    <TodoContainer></TodoContainer>
  </div>
</template>

<script>
import TodoContainer from './components/TodoContainer'

export default {
  name: 'app',

  components: {
    TodoContainer
  }
}
</script>
