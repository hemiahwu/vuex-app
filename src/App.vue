<template>
  <div id="app">
    <p>{{count}}</p>
    <p>{{todos}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    todos() {
      return this.$store.state.todos;
    }
  }
  // 写法2
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  // 写法3
  // computed: mapState(["count", "todos"])
};
</script>

<style>
</style>
