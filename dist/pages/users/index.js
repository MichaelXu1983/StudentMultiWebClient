"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../utils/index.js");

var _indexModuleScssMap = require("./index.module.scss.map.js");

var _indexModuleScssMap2 = _interopRequireDefault(_indexModuleScssMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var usersBg = "/assets/images/users/users_bg.png";
var arrowRight = "/assets/images/other/arrow_right.png";
var help = "/assets/images/users/icon/help.png";
var customer = "/assets/images/users/icon/customer.png";
var setting = "/assets/images/users/icon/setting.png";
var message = "/assets/images/users/icon/message.png";
var notice = "/assets/images/users/icon/notice.png";
var praise = "/assets/images/users/icon/praise.png";
var avatar = "/assets/images/other/avatar.png";

var Users = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Users, _BaseComponent);

  function Users() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["styles", "usersBg", "avatar", "message", "arrowRight", "notice", "help", "setting", "env", "customer", "praise"], _this.config = {
      navigationBarTitleText: '我的'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Users, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Users.prototype.__proto__ || Object.getPrototypeOf(Users.prototype), "_constructor", this).apply(this, arguments);
      this.env = "weapp";
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _index3.showShareMenu)(); // 开启页面分享按钮
    }
  }, {
    key: "onShowContact",
    value: function onShowContact() {
      _index2.default.makePhoneCall({
        phoneNumber: '4008034725'
      });
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      if (this.env === 'h5') {
        _index2.default.showModal({
          title: '提示',
          content: '微信小程序搜索【袋小鼠爱编程】，点击【我的】-【分享给小伙伴】',
          showCancel: false,
          cancelText: '取消',
          cancelColor: '#7f7f7f',
          confirmText: '知道了',
          confirmColor: '#7d4c9f',
          success: function success() {
            // if (modalRes.confirm) {
            //   Taro.openSetting({
            //     success(data) {
            //       console.log('打开微信设置授权页面成功')
            //     },
            //     fail(data) {
            //       console.log('打开微信设置授权页面失败')
            //     },
            //   })
            // } else if (res.cancel) {
            //   console.log('用户点击取消授权弹窗')
            // }
          }
        });
      } else {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        var pages = _index2.default.getCurrentPages();
        var page = pages[pages.length - 1];
        var path = page.route + "?id=" + pages;
        var imageUrl = 'https://videos.codekid.top/share_pic.jpg'; // 可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG 。显示图片长宽比是 5:4
        return {
          title: '欢迎来到少儿编程实验室', // 默认当前小程序名称
          path: path,
          imageUrl: imageUrl,
          success: function success() {
            _index2.default.showToast({
              title: '转发成功！',
              icon: 'success'
            });
          },
          fail: function fail() {
            _index2.default.showToast({
              title: '转发失败！',
              icon: 'none'
            });
          }
        };
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var env = this.env;

      Object.assign(this.__state, {
        styles: _indexModuleScssMap2.default,
        usersBg: usersBg,
        avatar: avatar,
        message: message,
        arrowRight: arrowRight,
        notice: notice,
        help: help,
        setting: setting,
        env: env,
        customer: customer,
        praise: praise
      });
      return this.__state;
    }
  }]);

  return Users;
}(_index.Component), _class.$$events = ["onShowContact", "onShareAppMessage"], _class.$$componentPath = "pages/users/index", _temp2);
exports.default = Users;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Users, true));