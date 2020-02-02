"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _help_listModuleScssMap = require("./help_list.module.scss.map.js");

var _help_listModuleScssMap2 = _interopRequireDefault(_help_listModuleScssMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var help_guide = "/assets/images/help/help_guide.png";
var help_update = "/assets/images/help/help_update.png";
// import help_account from '@/src/assets/images/help/help_account.png'

var Help = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Help, _BaseComponent);

  function Help() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Help);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Help.__proto__ || Object.getPrototypeOf(Help)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["styles", "help_guide", "help_update"], _this.config = {
      navigationBarTitleText: '帮助中心'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Help, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Help.prototype.__proto__ || Object.getPrototypeOf(Help.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
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
        styles: _help_listModuleScssMap2.default,
        help_guide: help_guide,
        help_update: help_update
      });
      return this.__state;
    }
  }]);

  return Help;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/users/help_list", _temp2);
exports.default = Help;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Help, true));