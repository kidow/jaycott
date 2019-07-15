export const state = () => ({
  visible: false,
  title: ''
})

export const getters = {
  GET_VISIBLE: state => state.visible,
  GET_TITLE: state => state.title
}

export const mutations = {
  SAVE_VISIBLE(state, visible) {
    state.visible = visible
  },
  SAVE_TITLE(state, title) {
    state.title = title
  }
}
