<template>
  <div>
    <div class="jumbotron mx-4 mb-3">
      <p class="mb-3">Count: {{ count }}</p>
      <div clas="row">
        <button @click="incrementAsync" class="btn btn-primary mr-2">+</button>
        <button @click="incrementBy({ amount: 10 })" class="btn btn-warning">
          +10
        </button>
        <button @click="decrement" class="btn btn-danger ml-2">-</button>
      </div>
    </div>

    <p class="my-2">Completed Todos: {{ doneTodosCount }}</p>

    <p>Objects in Array: {{ getHello }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters([
      "countPlusLocalState",
      "doneTodos",
      "doneTodosCount",
      "getTodosById",
      "getHello",
    ]),
  },
  methods: {
    ...mapMutations(["increment", "incrementBy", "decrement"]),
    ...mapActions(["incrementAsync"]),
  },
};

// count: state => state.count,
//countAlias: 'count',

//countPlusLocalState (state) {
//  return state.count + this.localCount
//}

//doneTodosCount() {
//return this.$store.getters.doneTodosCount
//}

// increment() {
//   this.$store.commit("increment");
// },

// testAction() {
//   this.$store.dispatch("actionA").then(() => {});
// },
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
