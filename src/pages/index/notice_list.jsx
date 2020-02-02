import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import arrowRight from '@/src/assets/images/other/arrow_right.png'
import noticePic from '@/src/assets/images/tmp/banner.jpg'
import styles from './notice_list.module.scss'

class Notice extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            isNoticeRead: 1,
        }
        this.env = process.env.TARO_ENV
    }

    config = {
        navigationBarTitleText: '公告中心',
    }

    render() {
        return (
            <View className={styles['notice']}>
                <View className={styles['notice-item__container']}>
                    <Navigator url='/pages/webview/notice_detail' className={styles['index__Navigator']}>
                        <View className={styles['notice-item']}>
                            {this.state.isNoticeRead === 0 && (<View className={styles['notice-item__status']}></View>)}
                            <View className={styles['notice-item__intro-container']}>
                                <View className={styles['notice-item__maintitle']}>
                                    <Text className={styles['notice-item__maintitle-text']}>袋小鼠爱编程应用上线啦</Text>
                                </View>
                                <View className={styles['notice-item__intro']}>
                                    <Text className={styles['notice-item__date-text']}>2019-08-11 09:30</Text>
                                </View>
                            </View>
                            <View className={styles['notice-item__pic']}><Image src={noticePic} className={styles['notice-item__pic-img']} /></View>

                            <View className={styles['notice-item__link']}>
                                <View className={styles['notice-item__link-left']}><Text className={styles['notice-item__link-text']}>查看详情</Text></View>

                                <View className={styles['notice-item__link-right']}><Image src={arrowRight} className={styles['notice-item__link-img']} />
                                </View>
                            </View>
                        </View>
                    </Navigator>
                </View>
            </View >
        )
    }
}
export default Notice
