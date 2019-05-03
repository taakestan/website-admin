export default ({app, store}) => {
  return new Promise((resolve, reject) => {
    app.$fireAuth.onAuthStateChanged(user => {
      return user
          ? resolve(store.commit('setUser', user))
          : resolve();
    })
  })
}