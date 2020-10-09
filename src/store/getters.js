export default {
  countPlusLocalState(state) {
    return state.count + state.localCount;
  },
  doneTodos(state) {
    return state.todos.filter((todo) => todo.done);
  },
  doneTodosCount(state, getters) {
    return getters.doneTodos.length;
  },
  getTodoById(state, id) {
    return state.todos.find((todo) => todo.id === id);
  },
};
