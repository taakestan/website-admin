export default ({app, store}) => {
  return new Promise((resolve, reject) => {
    app.$fireAuth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.commit('setUser', user))
      }
      return resolve()
    })
  })
}