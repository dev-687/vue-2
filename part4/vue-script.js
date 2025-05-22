new Vue({
  el: "#app",
  data() {
    return {
      users: [
        { name: "John", email: "john@gmail.com" },
        { name: "Kapil", email: "kapil@gmail.com" },
      ],
      name: "",
      value: "",
    };
  },
  methods: {
    find() {
      this.value = this.name;
    },
  },
  computed: {},
  watch: {},
});
