import Taro, { Component } from "@tarojs/taro";
import { WebView, View, RichText } from "@tarojs/components";
import { getGlobalData } from "@/src/utils";
import httpRequest from "@/src/utils/request";

const re = /^\/api\//i; // 来源没有 api 标识，则跳转 webview

class WebViewIndex extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      detailString: "",
    };
    this.env = process.env.TARO_ENV;
  }
  componentWillMount() {
    Taro.setNavigationBarTitle({
      title: this.$router.params.pageTitle || "袋小鼠爱编程",
    });
  }
  componentDidMount() {
    const { source } = this.$router.params;
    if (re.test(source)) {
      httpRequest.get(source).then((r) => {
        this.setState({
          detailString: r.data.value.content,
        });
      });
    }
  }

  render() {
    const { source } = this.$router.params;

    return re.test(source) ? (
      <View style={{ "max-width": "100%", padding: "20px" }}>
        <RichText nodes={this.state.detailString} />
      </View>
    ) : (
      <WebView
        src={this.$router.params.source || getGlobalData("businessDomain")}
      />
    );
  }
}
export default WebViewIndex;
