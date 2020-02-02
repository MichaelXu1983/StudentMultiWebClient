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

var _settingModuleScssMap = require("./setting.module.scss.map.js");

var _settingModuleScssMap2 = _interopRequireDefault(_settingModuleScssMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var arrowRight = "/assets/images/other/arrow_right.png";

var Setting = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Setting, _BaseComponent);

  function Setting() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Setting);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Setting.__proto__ || Object.getPrototypeOf(Setting)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["styles", "arrowRight", "SDKVersion", "systemInfo"], _this.config = {
      navigationBarTitleText: '设置'
      // onLogout() {
      //     Taro.showModal({
      //         title: '提示',
      //         content: '确定要退出当前账号？',
      //         showCancel: true,
      //         cancelText: '取消',
      //         cancelColor: '#7f7f7f',
      //         confirmText: '退出登录',
      //         confirmColor: '#f43530',
      //         success(modalRes) {
      //             if (modalRes.confirm) {
      //                 try {
      //                     Taro.clearStorage()
      //                     jumpUrl('/pages/users/login')
      //                 } catch (e) {
      //                     console.info(e)
      //                 }
      //             } else if (res.cancel) {
      //                 console.log('用户点击取消授权弹窗')
      //             }
      //         },
      //     })
      // }

    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Setting, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Setting.prototype.__proto__ || Object.getPrototypeOf(Setting.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        systemInfo: {
          SDKVersion: ''

        }
      };
      this.env = "weapp";
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var systemData = (0, _index3.getSystemInfo)(); // 获取设备信息
      if (systemData || !(0, _index3.isEmptyObject)(systemData)) {
        var SDKVersion = systemData.SDKVersion;

        this.setState({
          systemInfo: {
            SDKVersion: SDKVersion
          }
        }, function () {});
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var SDKVersion = this.__state.systemInfo.SDKVersion;

      Object.assign(this.__state, {
        styles: _settingModuleScssMap2.default,
        arrowRight: arrowRight,
        SDKVersion: SDKVersion
      });
      return this.__state;
    }
  }]);

  return Setting;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/users/setting", _temp2);
exports.default = Setting;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Setting, true));