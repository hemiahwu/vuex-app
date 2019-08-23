const state = {
  todos: [
    { id: 1, title: 'todo item 1', completed: true },
    { id: 2, title: 'todo item 2', completed: true },
    { id: 3, title: 'todo item 3', completed: false }
  ]
};
const getters = {
  completedTodos: state => {
    return state.todos.filter(todo => todo.completed);
  },
  completedTodosCount: (state, getters) => {
    return getters.completedTodos.length;
  },
  getTodosById: state => id => {
    return state.todos.find(todo => todo.id === id);
  }
};
const mutations = {
  setTodos(state, data) {
    state.todos = data;
  }
};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/todos'
    );
    console.log(response.data);
    commit('setTodos', response.data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
