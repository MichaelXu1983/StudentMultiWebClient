import Taro, { Component } from "@tarojs/taro";
import { View, RichText } from "@tarojs/components";
import httpRequest from "@/src/utils/request";

class ArticleDetail extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      detailString: "",
    };
    this.env = process.env.TARO_ENV;
  }
  componentDidMount() {
    const { url } = this.$router.params;
    httpRequest.get(url).then((r) => {
      Taro.setNavigationBarTitle({
        title: r.data.value.title || "袋小鼠爱编程",
      });
      this.setState({
        detailString: r.data.value.content,
      });
    });
  }

  render() {
    return (
      <View style={{ "max-width": "100%", padding: "0px 20px" }}>
        <RichText nodes={this.state.detailString} />
      </View>
    );
  }
}

export default ArticleDetail;
