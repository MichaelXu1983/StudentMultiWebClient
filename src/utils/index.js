/*
 * @Author: Michael Xu
 * @Date: 2020-02-02 20:40:44
 * @LastEditTime: 2020-06-15 12:03:29
 * @LastEditors: Michael Xu
 * @Description:
 * @FilePath: /StudentMultiWebClient/src/utils/index.js
 * @Blog: https://www.michaelxu.cn/
 */

import Taro from "@tarojs/taro";

const globalData = {};

function setGlobalData(key, val) {
  globalData[key] = val;
}

function getGlobalData(key) {
  return globalData[key];
}

setGlobalData("businessDomain", "https://api.codekid.top");

function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

//获取当前系统信息
function getSystemInfo() {
  try {
    const systemInfo = Taro.getStorageSync("SYSTEMINFO");
    if (systemInfo !== "") {
      return systemInfo;
    }
  } catch (err) {
    console.log(err);
  }

  try {
    const systemInfo = Taro.getSystemInfoSync();
    Taro.setStorageSync("SYSTEMINFO", systemInfo);
    return systemInfo;
  } catch (err) {
    console.log(err);
    return {};
  }
}

function showShareMenu() {
  if (process.env.TARO_ENV === "qq") {
    // eslint-disable-next-line no-undef
    qq.showShareMenu({
      showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
    });
  } else if (process.env.TARO_ENV === "tt") {
    // eslint-disable-next-line no-undef
    tt.showShareMenu({
      success() {
        console.log(`showShareMenu 调用成功`);
      },
      fail() {
        console.log(`showShareMenu 调用失败`);
      }
    });
  }
}
export {
  setGlobalData,
  getGlobalData,
  isEmptyObject,
  getSystemInfo,
  showShareMenu
};
