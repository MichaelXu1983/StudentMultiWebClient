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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HelpDetail.__proto__ || Object.getPrototypeOf(HelpDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["detailNodes", "detailString"], _this.config = {
      navigationBarTitleText: '袋小鼠爱编程应用上线了'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HelpDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(HelpDetail.prototype.__proto__ || Object.getPrototypeOf(HelpDetail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        detailNodes: []
      };
      this.env = "weapp";
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        detailNodes: [{
          name: 'div',
          attrs: { class: 'article-detail__title' },
          children: [{ type: 'text', text: '袋小鼠爱编程上线啦' }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '2018年9月10日' }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '我们是做什么的' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '袋小鼠爱编程是针对 4-18 岁少儿，在线编程教育的应用。'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '在哪可以找到我们' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '袋小鼠爱编程应用，在微信、QQ、百度、头条、抖音小程序和苹果、安卓商店都可以找到。'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '我们的愿景是什么' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '我们的愿景是：让中国每个学校的每个学生都能像语文、数学、英语一样学习计算机科学1。'
          }]
        }],
        detailString: '<span>string nodes: love</span>'

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
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/webview/notice_detail", _temp2);
exports.default = HelpDetail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(HelpDetail, true));