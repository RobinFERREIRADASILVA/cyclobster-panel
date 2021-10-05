import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    categories: [],
    photos: ['photo1', 'photo3', 'photo444'],
  },
  mutations: {
    LOAD_PHOTOS(state, posts) {
      state.photos = posts
  }

  },
  actions: {
    getPhotos({ commit }) {
      axios.get('http://localhost:8000/pictures')
          .then(response => {
            console.log(response);
              commit('LOAD_PHOTOS', response.data)
      })
    }

  },
  modules: {
  }
})
