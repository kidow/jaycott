export const state = () => ({
  list: [],
  searchList: []
})

export const getters = {
  GET_LIST: state => state.list,
  GET_SEARCH_LIST: state => state.searchList
}

export const mutations = {
  SAVE_LIST(state, list) {
    state.list = list
  },
  SAVE_SEARCH_LIST(state, searchList) {
    state.searchList = searchList
  }
}
