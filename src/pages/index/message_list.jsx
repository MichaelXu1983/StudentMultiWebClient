import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './message_list.scss'
import noMessage from '@/src/assets/images/no_data/message.png'

class Message extends Component {
    static options = {
        addGlobalClass: true // 支持组件外部样式，小程序基础库版本 2.2.3 开始支持
    }
    config = {
        navigationBarTitleText: '消息中心',
    }
    constructor() {
        super(...arguments)
        this.state = {
            isMesRead: 0,
        }
        this.env = process.env.TARO_ENV
    }
    render() {
        return (
            <View className='message'>
                <View className='message-item__container'>
                    <View className='global-empty'>
                        <View className='global-empty__pic'><Image src={noMessage} className='global-empty__pic-img' /></View>
                        <View className='global-empty__intro'><Text className='global-empty__text'>暂无消息</Text></View>
                    </View>
                    {/* <View className='message-item'>
                        {this.state.isMesRead === 0 && (<View className='message-item__status'></View>)}

                        <View className='message-item__intro-container'>
                            <View className='message-item__intro-maintitle'>
                                <Text className='message-item__maintitle'>新注册用户畅玩新注册用户畅玩新注册用户畅玩新注册用户畅玩</Text>
                            </View>
                            <View className='message-item__intro'>
                                <Text className='message-item__date-text'>2019-08-01 09:30</Text>
                            </View>
                        </View>
                        <View className='message-item__thumb'><Text className='message-item__text'>只需三步，注册会员，即可试运营期间畅玩只需三步，注册会员，即可试运营期间畅玩只需三步，注册会员，即可试运营期间畅玩</Text></View>
                    </View>
               */}
                </View>
            </View >
        )
    }
}
export default Message
