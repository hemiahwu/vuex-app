<template>
  <div id="app">
    <!-- mutations -->
    <!-- <button @click="decrement(2)">-</button> -->
    <!-- <button @click="decrement({amout:2})">-</button> -->
    <button @click="decrementCount({amout:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "app",
  // 方法2
  methods: mapMutations(["decrementCount", "incrementCount"]),
  // 方法1
  // methods: {
  //   decrement(m) {
  //     this.$store.commit("decrementCount", m);
  //   },
  //   increment() {
  //     this.$store.commit("incrementCount");
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
