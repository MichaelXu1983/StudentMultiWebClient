"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("./npm/@tarojs/async-await/index.js");

var _index = require("./npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./npm/@tarojs/redux/index.js");

var _index4 = require("./store/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { getSystemInfo } from '@/src/utils/index'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var store = (0, _index5.default)();

(0, _index3.setStore)(store);

if (_index3.ReduxContext.Provider) {
  _index3.ReduxContext.Provider({
    store: store
  });
  _index3.ReduxContext.Provider({
    store: store
  });
}

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _App.__proto__ || Object.getPrototypeOf(_App)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index/index', 'pages/index/notice_list', 'pages/index/message_list', 'pages/courses/index', 'pages/courses/courses_list', 'pages/users/index', 'pages/users/setting', 'pages/users/help_list', 'pages/users/help_detail', 'pages/webview/courses_detail', 'pages/webview/attention', 'pages/webview/guide', 'pages/webview/notice', 'pages/webview/about', 'pages/webview/help', 'pages/webview/notice_detail', 'pages/webview/attention_detail', 'pages/webview/guide_detail', 'pages/webview/about_detail', 'pages/webview/update_notice', 'pages/webview/update_notice_detail', 'pages/webview/update_time', 'pages/webview/update_time_detail', 'pages/webview/agreement', 'pages/webview/agreement_detail', 'pages/webview/privacy', 'pages/webview/privacy_detail'],
      window: {
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '袋小鼠爱编程',
        navigationBarTextStyle: 'black',
        navigationStyle: 'default', // 导航栏样式:default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
        backgroundColor: '#f7f7f9', // 窗口的背景色
        backgroundColorTop: '#ffffff', // 顶部窗口的背景色，仅 iOS 支持
        backgroundColorBottom: '#ffffff', // 底部窗口的背景色，仅 iOS 支持
        enablePullDownRefresh: false, // 是否开启当前页面的下拉刷新
        backgroundTextStyle: 'light', // 下拉 loading 的样式，仅支持 dark / light
        onReachBottomDistance: 200, // 页面上拉触底事件触发时距页面底部距离，单位为 px
        pageOrientation: 'auto', // 屏幕旋转设置，支持 auto / portrait / landscape
        disableSwipeBack: false // 禁止页面右滑手势返回
      },
      tabBar: {
        list: [{
          pagePath: 'pages/index/index', // 页面路径，必须在 pages 中先定义
          text: '首页',
          iconPath: './assets/images/tab_bar/home.png',
          selectedIconPath: './assets/images/tab_bar/home_select.png' //icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon
        }, {
          pagePath: 'pages/courses/index',
          text: '课程',
          iconPath: './assets/images/tab_bar/courses.png',
          selectedIconPath: './assets/images/tab_bar/courses_select.png'
        }, {
          pagePath: 'pages/users/index',
          text: '我的',
          iconPath: './assets/images/tab_bar/users.png',
          selectedIconPath: './assets/images/tab_bar/users_select.png'
        }],
        position: 'bottom', // tabBar的位置，仅支持 bottom / top
        custom: false, // 自定义 tabBar
        color: '#8a8a8a',
        selectedColor: '#7d4c9f',
        backgroundColor: '#fff',
        borderStyle: 'black'
      },
      networkTimeout: {
        request: 6000,
        connectSocket: 10000,
        uploadFile: 10000,
        downloadFile: 10000
      },
      debug: true

      // componentDidMount() {
      //   getSystemInfo() // 获取设备信息，并储存 LS
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_App, [{
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_index.Component);

exports.default = _App;

App(require('./npm/@tarojs/taro-weapp/index.js').default.createApp(_App));
_index2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});