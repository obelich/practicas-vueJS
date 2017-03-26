<template>
  <div>
    <ul>
      <li v-for="tarea in tareas">{{tarea.title}} </li>
    </ul>
  </div>

</template>

<script>
  module.exports = {
    props: ['tareas'],
  }
</script>