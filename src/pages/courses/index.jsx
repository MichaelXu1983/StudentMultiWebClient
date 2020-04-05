import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Navigator } from "@tarojs/components";
import { getGlobalData } from "@/src/utils";
import { showShareMenu } from "@/src/utils/index";
import httpRequest from "@/src/utils/request";
import coursesBg from "@/src/assets/images/courses/bg.png";
import styles from "./index.module.scss";

class Courses extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      list: [],
      mainTitle: "",
      subTitle: "",
    };
    this.env = process.env.TARO_ENV;
  }
  componentDidMount() {
    httpRequest.get("/api/v1/contents/1/153").then((r) => {
      this.setState({
        list: r.data.value,
        mainTitle: r.data.value[0].author,
        subTitle: r.data.value[0].summary,
      });
    });
    showShareMenu(); // 开启页面分享按钮
  }

  config = {
    navigationBarTitleText: "课程",
  };
  render() {
    const { list, mainTitle, subTitle } = this.state;
    return (
      <View className={styles["courses"]}>
        <View className={styles["courses-header"]}>
          <Image src={coursesBg} className={styles["courses__bg"]} />
          <View className={styles["courses-header__intro-maintitle"]}>
            <Text className={styles["courses-header__maintitle-text"]}>
              {mainTitle}
            </Text>
          </View>
          <View className={styles["courses-header__intro-subtitle"]}>
            <Text className={styles["courses-header__subtitle-text"]}>
              {subTitle}
            </Text>
          </View>
        </View>
        <View className={styles["courses-item__container"]}>
          {list.map((item) => (
            <Navigator
              key={item.id}
              url={`/pages/webview/index?source=${item.source}&pageTitle=${item.title}`}
              className={styles["index__Navigator"]}
            >
              <View className={styles["courses-item"]}>
                <View className={styles["courses-item__thumb"]}>
                  <View
                    className={styles["courses-item__thumb-loading"]}
                  ></View>
                  <Image
                    src={getGlobalData("businessDomain") + item.imageUrl}
                    className={styles["courses-item__thumb-img"]}
                  />
                </View>
                <View className={styles["courses-item__maintitle"]}>
                  <Text className={styles["courses-item__maintitle-text"]}>
                    {item.title}
                    <Text className={styles["courses-item__subscript"]}>
                      {item.subTitle}
                    </Text>
                  </Text>
                </View>
                <View className={styles["courses-item__subtitle"]}>
                  <Text className={styles["courses-item__subtitle-text"]}>
                    {item.summary}
                  </Text>
                </View>
              </View>
            </Navigator>
          ))}
        </View>
      </View>
    );
  }
}
export default Courses;
