import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, title: 'todo item 1', completed: false },
      { id: 2, title: 'todo item 2', completed: false },
      { id: 3, title: 'todo item 3', completed: false }
    ]
  },
  mutations: {},
  actions: {}
});
