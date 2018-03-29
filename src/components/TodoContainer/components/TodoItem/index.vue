<template>
  <div :class="[todo.complete ? 'completed' : 'todo']">
    {{ todo.text }}
  </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      todo: {
        required: true,
        type: Object
      }
    }
  }

</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>


