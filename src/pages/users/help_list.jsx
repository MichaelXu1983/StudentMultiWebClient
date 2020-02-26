import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Navigator } from "@tarojs/components";
import help_guide from "@/src/assets/images/help/help_guide.png";
import help_update from "@/src/assets/images/help/help_update.png";
// import help_account from '@/src/assets/images/help/help_account.png'
import styles from "./help_list.module.scss";

class Help extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
    this.env = process.env.TARO_ENV;
  }
  config = {
    navigationBarTitleText: "帮助中心"
  };
  render() {
    return (
      <View className={styles["help"]}>
        <View className={styles["help-link__item"]}>
          <View className={styles["help-link__icon"]}>
            <Image
              src={help_guide}
              className={styles["help-link__icon-help"]}
            />
          </View>
          <View className={styles["help-link__ask"]}>
            <Navigator
              url='/pages/webview/attention'
              className={styles["index__Navigator"]}
            >
              <View className={styles["help-link__title"]}>
                <Text className={styles["help-link__title-text"]}>
                  上课须知 ？
                </Text>
              </View>
            </Navigator>
            <Navigator
              url='/pages/webview/guide'
              className={styles["index__Navigator"]}
            >
              <View
                className={styles["help-link__title"]}
              >
                <Text className={styles["help-link__title-text"]}>
                  上课指南 ？
                </Text>
              </View>
            </Navigator>
          </View>
        </View>
        <View className={styles["help-link__separator"]} />
        <View className={styles["help-link__item"]}>
          <View className={styles["help-link__icon"]}>
            <Image
              src={help_update}
              className={styles["help-link__icon-help"]}
            />
          </View>
          <View className={styles["help-link__ask"]}>
            <Navigator
              url='/pages/webview/update_time'
              className={styles["index__Navigator"]}
            >
              <View className={styles["help-link__title"]}>
                <Text className={styles["help-link__title-text"]}>
                  我们多长时间更新一次课程 ？
                </Text>
              </View>
            </Navigator>
            <Navigator
              url='/pages/webview/update_notice'
              className={styles["index__Navigator"]}
            >
              <View className={styles["help-link__title"]}>
                <Text className={styles["help-link__title-text"]}>
                  如何收到课程更新通知 ？
                </Text>
              </View>
            </Navigator>
          </View>
        </View>
        {/* <View className={styles['help-link__separator']} />
                <View className={styles['help-link__item']}>
                    <View className={styles['help-link__icon']}>
                        <Image src={help_account} className={styles['help-link__icon-help']} />
                    </View>
                    <View className={styles['help-link__ask']}>
                        <Navigator url='/pages/users/help_detail' className={styles['index__Navigator']}>
                            <View
                                className={styles['help-link__title'
                            >
                                <Text className={styles['help-link__title-text']}>
                                    账号密码忘记如何找回 ？
                </Text>
                            </View>
                        </Navigator>
                        <Navigator url='/pages/users/help_detail' className={styles['index__Navigator']}>
                            <View
                                className={styles['help-link__title'
                            >
                                <Text className={styles['help-link__title-text']}>
                                    账号有何用用处 ？
                </Text>
                            </View>
                        </Navigator>
                        <Navigator url='/pages/users/help_detail' className={styles['index__Navigator']}>
                            <View
                                className={styles['help-link__title help-link__title-noborder'
                            >
                                <Text className={styles['help-link__title-text']}>技术要求 ？</Text>
                            </View>
                        </Navigator>
                    </View>
                </View> */}
      </View>
    );
  }
}

export default Help;
