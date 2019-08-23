const state = { count: 0 };
const getters = {
  count: state => {
    return ++state.count;
  }
};
const mutations = {
  incrementCount(state) {
    state.count++;
  },
  decrementCount(state, n) {
    // state.count -= n;
    state.count -= n.amout;
  }
};
const actions = {
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
