import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'

import './notice_list.scss'
import arrowRight from '@/src/assets/images/other/arrow_right.png'
import noticePic from '@/src/assets/images/tmp/banner.jpg'


class Notice extends Component {
    config = {
        navigationBarTitleText: '公告中心',
    }
    constructor() {
        super(...arguments)
        this.state = {
            isNoticeRead: 1,
        }
        this.env = process.env.TARO_ENV
    }

    render() {
        return (
            <View className='notice'>
                <View className='notice-item__container'>
                    <Navigator url="/pages/webview/notice" className='index__Navigator'>
                        <View className='notice-item'>
                            {this.state.isNoticeRead === 0 && (<View className='notice-item__status'></View>)}
                            <View className='notice-item__intro-container'>
                                <View className='notice-item__maintitle'>
                                    <Text className='notice-item__maintitle-text'>袋小鼠爱编程应用上线啦</Text>
                                </View>
                                <View className='notice-item__intro'>
                                    <Text className='notice-item__date-text'>2019-08-11 09:30</Text>
                                </View>
                            </View>
                            <View className='notice-item__pic'><Image src={noticePic} className='notice-item__pic-img' /></View>

                            <View className='notice-item__link'>
                                <View className='notice-item__link-left'><Text className='notice-item__link-text'>查看详情</Text></View>

                                <View className='notice-item__link-right'><Image src={arrowRight} className='notice-item__link-img' />
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
