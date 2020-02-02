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

var AttentionDetail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AttentionDetail, _BaseComponent);

  function AttentionDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AttentionDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AttentionDetail.__proto__ || Object.getPrototypeOf(AttentionDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["detailNodes"], _this.config = {
      navigationBarTitleText: '上课须知'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AttentionDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AttentionDetail.prototype.__proto__ || Object.getPrototypeOf(AttentionDetail.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        detailNodes: []
      };
      this.env = "weapp";
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.$router.params.id);
      this.setState({
        detailNodes: [{
          name: 'div',
          attrs: { class: 'article-detail__title' },
          children: [{ type: 'text', text: '上课须知' }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '支持的设备' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '该应用支持任何移动设备使用，包括但不限于手机或者平板。'
          }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '为了保证流畅体验，我们建议您的设备至少使用 WIFI 或者 4G 连接，整个应用大概会消耗不超过 10M 流量。'
          }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '建议在课程中取消设备旋转锁定，并使用横屏，最佳屏幕尺寸为 1024x728 像素或以上。'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '支持的浏览器和平台' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '我们为不同浏览器和平台提供的支持级别采取分层方法，以确保我们为大多数用户构建一流的体验，并为其他用户提供可接受的体验。我们支持以下操作系统和浏览器组合：'
          }]
        }, {
          name: 'img',
          attrs: {
            class: 'article-detail__img',
            alt: '技术要求',
            width: '100%',
            src: 'http://imgup02.sj88.com/2019-03/01/09/15514050123834_1.jpg'
          }
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

  return AttentionDetail;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/webview/attention_detail", _temp2);
exports.default = AttentionDetail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AttentionDetail, true));