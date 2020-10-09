export default {
  count: 3,
  localCount: 4,

  todos: [
    { id: 1, text: "...", done: true },
    { id: 2, text: "...", done: false },
  ],

  hello: [
    { a: (state) => state.a.count },
    { b: (state) => state.b.subModule.count },
  ],
};
