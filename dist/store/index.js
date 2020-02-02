"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = configStore;

var _redux = require("../npm/redux/lib/redux.js");

var _index = require("../npm/redux-thunk/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../reducers/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : _redux.compose;

var middlewares = [_index2.default];

{
  middlewares.push(require("../npm/redux-logger/dist/redux-logger.js").createLogger());
}

var enhancer = composeEnhancers(_redux.applyMiddleware.apply(undefined, middlewares)
// other store enhancers if any
);

function configStore() {
  var store = (0, _redux.createStore)(_index4.default, enhancer);
  return store;
}