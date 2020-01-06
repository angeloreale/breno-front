import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageSent: false,
    sending: false,
    messageError: false
  },
  mutations: {
    consolidateMessageSent (state) {
      state.messageSent = true
      state.sending = false
    },
    sendingMessage (state) {
      state.sending = true
    },
    consolidateMessageError (state) {
      state.sending = false
      state.messageError = !state.messageError
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
          } else {
            console.log('promise error')
            this.commit('consolidateMessageError')
          }
        }).catch(() => {
          console.log('catch error')
          this.commit('consolidateMessageError')
        })
    }
  },
  modules: {
  }
})
