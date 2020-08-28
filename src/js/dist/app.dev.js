"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

new _vue["default"]({
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
    showMenu: function showMenu() {
      this.isShown = !this.isShown;
    },
    checkForm: function checkForm(e) {
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
    validEmail: function validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  mounted: function mounted() {
    var _this = this;

    _axios["default"].get("./data.json").then(function (response) {
      return _this.data = response.data;
    });
  }
});