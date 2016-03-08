"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Job = (function () {
  function Job(client) {
    _classCallCheck(this, Job);

    this.client = client;
  }

  _createClass(Job, [{
    key: "find",
    value: function find(params, f) {
      return this.client.get("/jobs/" + params.id, {}, f);
    }
  }, {
    key: "error",
    value: function error(params, f) {
      return this.client.get("/jobs/" + params.id + "/error", {}, f);
    }
  }]);

  return Job;
})();

exports["default"] = Job;
module.exports = exports["default"];