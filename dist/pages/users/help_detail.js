"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HelpDetail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(HelpDetail, _BaseComponent);

  function HelpDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HelpDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelpDetail.__proto__ || Object.getPrototypeOf(HelpDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["helpDetailNodes"], _this.config = {
      navigationBarTitleText: '帮助中心'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HelpDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(HelpDetail.prototype.__proto__ || Object.getPrototypeOf(HelpDetail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        helpDetailNodes: []
      };
      this.env = "weapp";
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        helpDetailNodes: [{
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '无需帐户' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '学生可以立即开始编写一些教程，而无需创建帐户！他们只需打开我们的应用，然后点击首页的“开始学习”按钮，即可进入可以选择要处理的课程的页面。 '
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '为何选择计算机科学' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '我们相信世界各地的每个学生都应该有机会学习计算机科学。它有助于培养解决问题的技能，逻辑和创造力。通过提前入学，学生将在任何21世纪的职业道路上获得成功的基础。'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '我应该先开始学习哪种编码语言' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '这是我们经常被问到的一个问题 - 而且没有一个明确的答案。这取决于你已经知道的，以及为什么你想要了解更多！如果您以前从未尝试过编码，请先使用拖放操作来学习概念。如果你之前尝试过拖放编程并想尝试基于文本的编码，那么最广泛使用的编程语言就是JavaScript。如果您想构建特定的内容，例如Android应用，iOS应用，网站或数据库，则每种内容都有特定的语言。'
          }]
        }]
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return HelpDetail;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/users/help_detail", _temp2);
exports.default = HelpDetail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(HelpDetail, true));