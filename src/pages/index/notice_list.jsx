import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import httpRequest from '@/src/utils/request'
import { businessDomain } from '@/src/utils'
import arrowRight from '@/src/assets/images/other/arrow_right.png'
import styles from './notice_list.module.scss'

class Notice extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            isNoticeRead: 1,
            list: []
        }
        this.env = process.env.TARO_ENV
    }
    componentDidMount() {
        httpRequest.get('/api/v1/contents/1/173').then(r => {
            this.setState({
                list: r.data.value
            })
        })
    }
    config = {
        navigationBarTitleText: '公告中心',
    }

    render() {
        const { list } = this.state
        return (
            <View className={styles['notice']}>
                <View className={styles['notice-item__container']}>
                    {list.map(item => (
                        <Navigator key={item.id} url={`/pages/webview/notice_detail?siteId=${item.siteId}&channelId=${item.channelId}&id=${item.id}`} className={styles['index__Navigator']}>
                            <View className={styles['notice-item']}>
                                {this.state.isNoticeRead === 0 && (<View className={styles['notice-item__status']}></View>)}
                                <View className={styles['notice-item__intro-container']}>
                                    <View className={styles['notice-item__maintitle']}>
                                        <Text className={styles['notice-item__maintitle-text']}>{item.title}</Text>
                                    </View>
                                    <View className={styles['notice-item__intro']}>
                                        <Text className={styles['notice-item__date-text']}>{item.lastEditDate}</Text>
                                    </View>
                                </View>
                                <View className={styles['notice-item__pic']}><Image src={businessDomain + item.imageUrl} className={styles['notice-item__pic-img']} /></View>
                                <View className={styles['notice-item__link']}>
                                    <View className={styles['notice-item__link-left']}><Text className={styles['notice-item__link-text']}>查看详情</Text></View>
                                    <View className={styles['notice-item__link-right']}><Image src={arrowRight} className={styles['notice-item__link-img']} />
                                    </View>
                                </View>
                            </View>
                        </Navigator>
                    ))}

                </View>
            </View >
        )
    }
}
export default Notice
