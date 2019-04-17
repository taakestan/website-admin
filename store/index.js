export const actions = {
  async nuxtClientInit({ dispatch }) {
    await dispatch('webinars/prepare');
    await dispatch('providers/prepare');
  },
};
