"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showShareMenu = exports.getSystemInfo = exports.isEmptyObject = undefined;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

require("../npm/@tarojs/async-await/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

//获取当前系统信息
function getSystemInfo() {
  try {
    var systemInfo = _index2.default.getStorageSync('SYSTEMINFO');
    if (systemInfo !== '') {
      return systemInfo;
    }
  } catch (err) {
    console.log(err);
  }

  try {
    var _systemInfo = _index2.default.getSystemInfoSync();
    _index2.default.setStorageSync('SYSTEMINFO', _systemInfo);
    return _systemInfo;
  } catch (err) {
    console.log(err);
    return {};
  }
}

function showShareMenu() {}
exports.isEmptyObject = isEmptyObject;
exports.getSystemInfo = getSystemInfo;
exports.showShareMenu = showShareMenu;