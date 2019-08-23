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
  mutations: {
    incrementCount(state) {
      state.count++;
    },
    decrementCount(state, n) {
      // state.count -= n;
      state.count -= n.amout;
    },
    setTodos(state, data) {
      state.todos = data;
    }
  },
  actions: {
    incrementCountAsync(context) {
      setTimeout(() => {
        context /* = this.store */
          .commit('incrementCount');
      }, 2000);
    },
    decrementCountAsync(context, n) {
      setTimeout(() => {
        context /* = this.store */
          .commit('decrementCount', n);
      }, 1000);
    },
    async fetchTodos({ commit }) {
      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/todos'
      );
      console.log(response.data);
      commit('setTodos', response.data);
    }
  }
});
