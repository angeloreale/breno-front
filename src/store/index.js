import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageSent: false
  },
  mutations: {
    consolidateMessageSent (state) {
      this.messageSent = true
    }
  },
  actions: {
    sendEmail (context, payload) {
      let url = `${process.env.VUE_APP_SERVER_URL}/api-v1/send-email`
      console.log('sending contact email...', payload)
      let data = payload
      axios.post(url, data, { headers: {
        'Content-Type': 'application/json'
      } })
        .then(res => {
          if (res.statusText === 'OK') {
            console.log('message sent')
            this.commit('consolidateMessageSent')
          }
        })
    }
  },
  modules: {
  }
})
