new Vue({
  el: "#app",
  data() {
    return {
      className: "alert alert-success",
      isActive: true,
      styleSection: {
        color: "red",
        border: "1px solid black",
        padding: "5px 10px",
        "margin-top": "10px",
        background: "lightblue",
      },
      title: "Speed of Sound",
      activeClass: "active",
      errorClass: "text-primary",
    };
  },
  methods: {},
  computed: {},
  watch: {},
});
