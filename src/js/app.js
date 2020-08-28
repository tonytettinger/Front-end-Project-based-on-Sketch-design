import Vue from "vue";
import axios from "axios";
new Vue({
  el: "#app",
  data: {
    data: null,
    errors: [],
    first: null,
    last: null,
    email: null,
    isShown: false
  },
  methods: {
    showMenu: function() {
      this.isShown = !this.isShown;
    },
    checkForm: function(e) {
      this.errors = [];

      if (!this.first) {
        this.errors.push("First name required.");
      }
      if (!this.last) {
        this.errors.push("Last name required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  mounted() {
    axios.get("./data.json").then(response => (this.data = response.data));
  }
});
