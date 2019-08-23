import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, title: 'todo item 1', completed: true },
      { id: 2, title: 'todo item 2', completed: true },
      { id: 3, title: 'todo item 3', completed: false }
    ]
  },
  getters: {
    count: state => {
      return ++state.count;
    },
    completedTodos: state => {
      return state.todos.filter(todo => todo.completed);
    },
    completedTodosCount: (state, getters) => {
      return getters.completedTodos.length;
    },
    getTodosById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {},
  actions: {}
});
