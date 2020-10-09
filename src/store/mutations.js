export default {
  increment(state) {
    state.count++;
  },
  incrementBy(state, payload) {
    state.count += payload.amount;
  },
  decrement(state) {
    state.count--;
  },
  testAction() {},
};
