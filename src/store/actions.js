export default {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("increment");
    }, 500);
  },
  actionA({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("someMutation");
        resolve();
        reject();
      }, 500);
    });
  },
  actionB({ dispatch, commit }) {
    return dispatch("actionA").then(() => {
      commit("someOtherMutation");
    });
  },
  //   async actionC({ commit }) {
  //     commit("gotData", await getData());
  //   },
  //   async actionD({ dispatch, commit }) {
  //     await dispatch("actionC");
  //     commit("gotOtherData", await getOtherData());
  //   },
};
