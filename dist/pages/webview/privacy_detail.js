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

var PrivacyDetail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PrivacyDetail, _BaseComponent);

  function PrivacyDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PrivacyDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PrivacyDetail.__proto__ || Object.getPrototypeOf(PrivacyDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["detailNodes"], _this.config = {
      navigationBarTitleText: '隐私政策'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PrivacyDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PrivacyDetail.prototype.__proto__ || Object.getPrototypeOf(PrivacyDetail.prototype), "_constructor", this).apply(this, arguments);
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
          children: [{ type: 'text', text: '隐私政策' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '网站隐私声明系网站保护用户隐私的承诺。鉴于网站的功能特性，网站将无可避免地与用户产生直接或间接的互动关系，故特此说明网站对用户信息所采取的收集、使用和保护政策，请您务必仔细阅读'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '用户信息的收集和使用' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '当用户在注册网站会员时，网站要求用户以微信登录的形式提供有关信息，如用户名，头像以及位置信息。这些信息会用来识别并确认用户，并将相关收藏、设置以及付款信息关联到此用户。用户在使用网站的过程中，网站以及支持网站的后台程序跟踪并存储用户的使用信息如用户设置、用户收藏信息以及用户访问记录。网站收集和使用这些信息，方便用户在任何一台安装了网站的设备上都可以获得一致的用户体验。'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '外部链接与安全' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '网站以及支持网站的后台程序会链接其他网站或网站地址，如微信登录以及微信支付。除微信登录验证、微信支付验证以及任何包含在以后网站隐私声明中明确列出的情况，网站以及支持网站的后台程序不会以任何形式向外部链接提供、分享或交易用户信息。'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '信息的公开和安全' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '除以上情况外，网站以及支持网站的后台程序不会向任何第三方提供、分享或交易用户信息；除非网站按相关法律法规需要提供用户的相关信息。网站以及支持网站的后台程序会对用户信息进行严格的管理及保护，本网站将使用相应的技术及安全措施，防止用户信息丢失、被盗用或遭窜改。但请注意在因特网上不存在“万无一失的安全措施”，如您对相关信息特别敏感，请在使用网站前仔细阅读以上内容并谨慎选择。'
          }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '隐私声明的修订与意见反馈' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '随着未来网站以及支持网站的后台程序的更新的情况，本隐私声明在未来也会相应更新。在未来任何一次更新网站前，请重新打开并阅读此隐私声明。如您对此隐私声明有任何疑问，请发送邮件至： 用户支持邮箱 info@tdreamer.com'
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

  return PrivacyDetail;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/webview/privacy_detail", _temp2);
exports.default = PrivacyDetail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PrivacyDetail, true));