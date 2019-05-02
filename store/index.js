export const strict = false;

export const state = () => ({
  user: null
});

export const getters = {
  activeUser: (state, getters) => {
    return state.user
  }
};

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  }
};

export const actions = {
  async nuxtClientInit({dispatch}) {
    await dispatch('webinars/prepare');
    await dispatch('providers/prepare');
  },
  autoSignIn({commit}, payload) {
    commit('setUser', payload)
  },
  signOut({commit}) {
    this.$fireAuth.signOut()
        .then(() => commit('setUser', null))
        .catch(err => console.log(err))
  }
};