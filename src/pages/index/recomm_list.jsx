import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import httpRequest from "@/src/utils/request";
import { getGlobalData } from "@/src/utils";
// import noMessage from "@/src/assets/images/no_data/message.png";
import arrowRight from "@/src/assets/images/other/arrow_right.png";
import styles from "./recomm_list.module.scss";

class Message extends Component {
  static options = {
    addGlobalClass: true, // 支持组件外部样式，小程序基础库版本 2.2.3 开始支持
  };
  constructor() {
    super(...arguments);
    this.state = {
      list: [],
    };
    this.env = process.env.TARO_ENV;
  }
  componentDidMount() {
    httpRequest.get("/api/v1/contents/1/172").then((r) => {
      this.setState({
        list: r.data.value,
      });
    });
  }

  config = {
    navigationBarTitleText: "官方推荐",
  };

  render() {
    const { list } = this.state;

    return (
      <View className={styles["notice"]}>
        <View className={styles["notice-item__container"]}>
          {list.map((item) => (
            <Navigator
              key={item.id}
              url={`/pages/webview/article_detail?url=/api/v1/contents/${item.siteId}/${item.channelId}/${item.id}`}
              className={styles["index__Navigator"]}
            >
              <View className={styles["notice-item"]}>
                {this.state.isNoticeRead === 0 && (
                  <View className={styles["notice-item__status"]}></View>
                )}
                <View className={styles["notice-item__intro-container"]}>
                  <View className={styles["notice-item__maintitle"]}>
                    <Text className={styles["notice-item__maintitle-text"]}>
                      {item.title}
                    </Text>
                  </View>
                  <View className={styles["notice-item__intro"]}>
                    <Text className={styles["notice-item__date-text"]}>
                      {item.lastEditDate}
                    </Text>
                  </View>
                </View>
                <View className={styles["notice-item__pic"]}>
                  <Image
                    src={getGlobalData("businessDomain") + item.imageUrl}
                    className={styles["notice-item__pic-img"]}
                  />
                </View>
                <View className={styles["notice-item__link"]}>
                  <View className={styles["notice-item__link-left"]}>
                    <Text className={styles["notice-item__link-text"]}>
                      查看详情
                    </Text>
                  </View>
                  <View className={styles["notice-item__link-right"]}>
                    <Image
                      src={arrowRight}
                      className={styles["notice-item__link-img"]}
                    />
                  </View>
                </View>
              </View>
            </Navigator>
          ))}
        </View>
      </View>
    );
  }
}
export default Message;
