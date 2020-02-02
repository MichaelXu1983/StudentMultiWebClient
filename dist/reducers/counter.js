"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = counter;

var _counter = require("../constants/counter.js");

var INITIAL_STATE = {
  num: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _counter.ADD:
      return _extends({}, state, {
        num: state.num + 1
      });
    case _counter.MINUS:
      return _extends({}, state, {
        num: state.num - 1
      });
    default:
      return state;
  }
}