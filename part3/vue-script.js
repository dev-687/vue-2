new Vue({
  el: "#app",
  data() {
    return {
      list: [
        fruit= "Mango",
        fruit= "Banana",
        fruit= "Apple", 
        fruit= "Orange",
        fruit= "Grapes",
        fruit= "Pineapple",
        fruit= "Strawberry",
        fruit= "Blueberry",
      ],
      newFruit: "",
    };
  },
  methods: {
    addFruit() {
      this.list.push(this.newFruit);
      this.newFruit = "";
    },
  },
  computed: {},
  watch: {},
});
