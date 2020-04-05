import Taro, { Component } from "@tarojs/taro";
import { WebView } from "@tarojs/components";
import { getGlobalData } from "@/src/utils";

class WebViewIndex extends Component {
  constructor() {
    super(...arguments);

    this.env = process.env.TARO_ENV;
  }
  componentWillMount() {
    Taro.setNavigationBarTitle({
      title: this.$router.params.pageTitle || "袋小鼠爱编程",
    });
    // source !== "" &&
    //   this.setState({
    //     url: source,
    //   });
  }
  //   config = {
  //     navigationBarTitleText: this.state.title,
  //   };
  render() {
    return (
      <WebView
        src={this.$router.params.source || getGlobalData("businessDomain")}
      />
    );
  }
}
export default WebViewIndex;
