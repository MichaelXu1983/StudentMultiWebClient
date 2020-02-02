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

var AgreementDetail = (_temp2 = _class = function (_BaseComponent) {
  _inherits(AgreementDetail, _BaseComponent);

  function AgreementDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AgreementDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AgreementDetail.__proto__ || Object.getPrototypeOf(AgreementDetail)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["detailNodes"], _this.config = {
      navigationBarTitleText: '使用协议'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AgreementDetail, [{
    key: "_constructor",
    value: function _constructor() {
      _get(AgreementDetail.prototype.__proto__ || Object.getPrototypeOf(AgreementDetail.prototype), "_constructor", this).apply(this, arguments);
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
          children: [{ type: 'text', text: '使用协议' }]
        }, {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '最后修订日期：2018年9月10日' }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '我们的核心课程和课程视频来自于 Code.org，CODE® 徽标设计是 Code.org 的注册商标，该部分版权也归属于他。它是一家非营利组织，致力于通过在更多学校推出计算机科学，以及增加女性和代表性不足的学生的参与度来扩大计算机科学的参与。他们很自豪能够在全球范围内完全免费提供他们的所有课程和课程内容，而无需任何必要的合作伙伴关系来在您的学校或组织中使用我们的材料！'
          }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '在访问或使用服务之前，请仔细阅读这些服务条款（“ 条款 ”）。访问或使用服务的任何部分或点击可能对您提供的“我同意”或“注册”按钮意味着您同意受这些条款的约束而不做任何修改。'
          }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '这些条款可能会有所变化。如果您在这些条款发生变更后继续使用服务，则表示您同意接受此类更改的约束，因此请定期查看这些条款。'
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

  return AgreementDetail;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/webview/agreement_detail", _temp2);
exports.default = AgreementDetail;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(AgreementDetail, true));