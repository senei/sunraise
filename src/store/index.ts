import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'

import userModel from './models/UserModel';
import channelModel from './models/UserModel';
import messageModel from './models/messageModel';

const vuexPersist = new VuexPersist({
  key: 'sunraise',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    chanelActive: new String(),
    users: Array<userModel>(),
    messages: Array<messageModel>(),
    channels: Array<channelModel>()
  },

  mutations: {
    addChannel(state, newChannel: channelModel) {
      state.channels.push(newChannel);
    },
    addUser(state, newUser: userModel) {
      state.users.push(newUser);
    },
    chengeActive(state, newActive: string) {
      state.chanelActive = newActive;
    }
  },
  actions: {
    addChannel(context, newChannel: channelModel) {
      context.commit('addChannel', newChannel);
    },
    addUser(context, newUser: userModel) {
      context.commit('addUser', newUser);
    },
    chengeActive(context, newActive: string) {
      context.commit('chengeActive', newActive);
    }
  },
  getters: {
    getMessages: (state) => (channelTag: string) => {
      return state.messages.filter(message => message.channelTag === channelTag);
    },
    getChannel: (state) => (tag: string) => {
      return state.channels.find(channel => channel.tag === tag);
    },
    getChannelByName: (state) => (name: string) => {
      return state.channels.find(channel => channel.name === name);
    },
    getUser: (state) => (tag: string) => {
      return state.users.find(user => user.tag === tag);
    },
    getUsersNames: (state) => {
      return state.users.map(user => user.name);
    },
    getUserByName: (state) => (name: string) => {
      return state.users.find(user => user.name === name);
    },
    getUsers: (state) => () => {
      return state.users;
    }
  },
  plugins: [vuexPersist.plugin]
});
