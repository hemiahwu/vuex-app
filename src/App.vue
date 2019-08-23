<template>
  <div id="app">
    <!-- getters -->
    <p>{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(1)}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  // 写法1
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])

  // 写法1
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // },
};
</script>

<style>
</style>
