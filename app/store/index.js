export const state = () => ({
  list: [
    {
      title: '유니클로',
      src:
        'https://seeklogo.com/images/U/uniqlo-logo-BDEC351EFB-seeklogo.com.png',
      description: '의류'
    },
    {
      title: '도요타',
      src:
        'https://cdn.pixabay.com/photo/2016/08/15/18/19/toyota-1596082_1280.png',
      description: '자동차'
    },
    {
      title: '닛산',
      src:
        'https://seeklogo.com/images/N/Nissan-logo-4B3C580C8A-seeklogo.com.png',
      description: '자동차'
    },
    {
      title: '혼다',
      src:
        'https://seeklogo.com/images/H/honda-silver-logo-E810C6A8A4-seeklogo.com.jpg',
      description: '자동차'
    }
  ]
})

export const getters = {
  GET_LIST: state => state.list
}

export const mutations = {
  SAVE_LIST(state, list) {
    state.list = list
  }
}
