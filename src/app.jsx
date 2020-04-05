import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.scss";

// import { getSystemInfo } from '@/src/utils/index'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/index/notice_list",
      // "pages/index/message_list",
      "pages/index/recomm_list",
      "pages/courses/index",
      "pages/courses/courses_list",
      "pages/users/index",
      "pages/users/setting",
      "pages/users/help_list",
      "pages/users/help_detail",
      "pages/webview/index",
      "pages/webview/article_detail",
    ],
    window: {
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "袋小鼠爱编程",
      navigationBarTextStyle: "black",
      navigationStyle: "default", // 导航栏样式:default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
      backgroundColor: "#f7f7f9", // 窗口的背景色
      backgroundColorTop: "#ffffff", // 顶部窗口的背景色，仅 iOS 支持
      backgroundColorBottom: "#ffffff", // 底部窗口的背景色，仅 iOS 支持
      enablePullDownRefresh: false, // 是否开启当前页面的下拉刷新
      backgroundTextStyle: "light", // 下拉 loading 的样式，仅支持 dark / light
      onReachBottomDistance: 200, // 页面上拉触底事件触发时距页面底部距离，单位为 px
      pageOrientation: "auto", // 屏幕旋转设置，支持 auto / portrait / landscape
      disableSwipeBack: false, // 禁止页面右滑手势返回
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/index", // 页面路径，必须在 pages 中先定义
          text: "首页",
          iconPath: "./assets/images/tab_bar/home.png",
          selectedIconPath: "./assets/images/tab_bar/home_select.png", //icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。当 position 为 top 时，不显示 icon
        },
        {
          pagePath: "pages/courses/index",
          text: "课程",
          iconPath: "./assets/images/tab_bar/courses.png",
          selectedIconPath: "./assets/images/tab_bar/courses_select.png",
        },
        {
          pagePath: "pages/users/index",
          text: "我的",
          iconPath: "./assets/images/tab_bar/users.png",
          selectedIconPath: "./assets/images/tab_bar/users_select.png",
        },
      ],
      position: "bottom", // tabBar的位置，仅支持 bottom / top
      custom: false, // 自定义 tabBar
      color: "#8a8a8a",
      selectedColor: "#7d4c9f",
      backgroundColor: "#fff",
      borderStyle: "black",
    },
    networkTimeout: {
      request: 6000,
      connectSocket: 10000,
      uploadFile: 10000,
      downloadFile: 10000,
    },
    debug: true,
  };

  // componentDidMount() {
  //   getSystemInfo() // 获取设备信息，并储存 LS
  // }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
