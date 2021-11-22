import { createStore } from 'vuex';

const store = createStore({
  state: {
    alerts: {
      errors: false,
      success: false,
      message: null,
    },
    sidebarStatus: false,
  },
  getters: {
    // Alert Getters
    alerts: (state) => state.alerts,
    // Sidebar Getters
    sidebarStatus: (state) => state.sidebarStatus,
  },
  mutations: {
    alerts(state, change) {
      state.alerts = change;
    },
    // Sidebar Toggle Mutation
    sidebarStatus(state, change) {
      state.sidebarStatus = change;
    },
  },
  actions: {
    alerts(context, change) {
      context.commit('alerts', change);
    },
    sidebarStatus(context, change) {
      context.commit('sidebarStatus', change);
    },
  },
});

export default store;
