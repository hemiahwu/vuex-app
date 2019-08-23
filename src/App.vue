<template>
  <div id="app">
    <!-- mutations -->
    <button @click="decrementCountAsync({amout:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>

    <!-- fetch Todos -->
    <p>{{completedTodos}}</p>
    <button @click="fetchTodos">Fetch Data</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  methods: mapActions([
    "decrementCountAsync",
    "incrementCountAsync",
    "fetchTodos"
  ]),
  // 方法2
  // methods: mapMutations(["decrementCount", "incrementCount"]),
  // 方法1
  // methods: {
  //   decrementCount(m) {
  //     // this.$store.commit("decrementCount", m);
  //     this.$store.dispatch("decrementCountAsync", m);
  //   },
  //   incrementCount() {
  //     // this.$store.commit("incrementCount");
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   fetchTodos() {
  //     this.$store.dispatch("fetchTodos");
  //   }
  // },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
};
</script>

<style>
</style>
