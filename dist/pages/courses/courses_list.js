"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _courses_listModuleScssMap = require("./courses_list.module.scss.map.js");

var _courses_listModuleScssMap2 = _interopRequireDefault(_courses_listModuleScssMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var coursesListBg = "/assets/images/courses/bg.png";

var CoursesList = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CoursesList, _BaseComponent);

  function CoursesList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CoursesList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CoursesList.__proto__ || Object.getPrototypeOf(CoursesList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["styles", "coursesListBg", "courseId"], _this.config = {
      navigationBarTitleText: '课程'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CoursesList, [{
    key: "_constructor",
    value: function _constructor() {
      _get(CoursesList.prototype.__proto__ || Object.getPrototypeOf(CoursesList.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        courseId: 1
      };
      this.env = "weapp";
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        courseId: this.$router.params.courseId
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

      var courseId = this.__state.courseId;

      Object.assign(this.__state, {
        styles: _courses_listModuleScssMap2.default,
        coursesListBg: coursesListBg
      });
      return this.__state;
    }
  }]);

  return CoursesList;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/courses/courses_list", _temp2);
exports.default = CoursesList;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CoursesList, true));