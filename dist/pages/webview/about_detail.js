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

var About = (_temp2 = _class = function (_BaseComponent) {
  _inherits(About, _BaseComponent);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["detailNodes"], _this.config = {
      navigationBarTitleText: '关于我们'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: "_constructor",
    value: function _constructor() {
      _get(About.prototype.__proto__ || Object.getPrototypeOf(About.prototype), "_constructor", this).apply(this, arguments);
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
          name: 'img',
          attrs: {
            class: 'article-detail__img-block',
            alt: '袋小鼠爱编程',
            width: '140',
            height: '140',
            src: 'https://videos.codekid.top/kangaroo_logo.png'
          }
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: ' 我们是一个非营利的组织，核心课程来自于 Code.org，他们也是一家非营利组织，致力于通过在更多学校推出计算机科学，以及增加女性和代表性不足的学生的参与度来扩大计算机科学的参与。他们很自豪能够在全球范围内完全免费提供他们的所有课程和课程内容，而无需任何必要的合作伙伴关系来在您的学校或组织中使用我们的材料！而我们也基于此种精神，致力于扩大 4-18 岁中国孩子学习计算机科学的机会，尽可能帮助他们从小建立编程思维，从而培养解决问题的能力。'
          }]
        }, {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [{
            type: 'text',
            text: '我们的愿景是：让中国每个学校的每个学生都能像语文、数学、英语一样学习计算机科学。'
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

  return About;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/webview/about_detail", _temp2);
exports.default = About;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(About, true));