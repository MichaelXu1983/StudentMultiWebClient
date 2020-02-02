"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _message_listModuleScssMap = require("./message_list.module.scss.map.js");

var _message_listModuleScssMap2 = _interopRequireDefault(_message_listModuleScssMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noMessage = "/assets/images/no_data/message.png";

var Message = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Message, _BaseComponent);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["styles", "noMessage", "isMesRead", "mesNum"], _this.config = {
      navigationBarTitleText: '消息中心'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Message, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Message.prototype.__proto__ || Object.getPrototypeOf(Message.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isMesRead: 0,
        mesNum: 0
      };
      this.env = "weapp";
      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {
        styles: _message_listModuleScssMap2.default,
        noMessage: noMessage
      });
      return this.__state;
    }
  }]);

  return Message;
}(_index.Component), _class.$$events = [], _class.options = {
  addGlobalClass: true // 支持组件外部样式，小程序基础库版本 2.2.3 开始支持
}, _class.$$componentPath = "pages/index/message_list", _temp2);
exports.default = Message;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Message, true));