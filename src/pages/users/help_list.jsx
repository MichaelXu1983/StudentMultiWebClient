import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import './help_list.scss'

import help_guide from '@/src/assets/images/help/help_guide.png'
import help_update from '@/src/assets/images/help/help_update.png'
import help_account from '@/src/assets/images/help/help_account.png'

class Help extends Component {
    config = {
        navigationBarTitleText: '帮助中心',
    }
    constructor() {
        super(...arguments)
        this.state = {}
        this.env = process.env.TARO_ENV
    }

    render() {
        return (
            <View className='help'>

                <View className='help-link__item'>
                    <View className='help-link__icon'>
                        <Image src={help_guide} className='help-link__icon-help' />
                    </View>
                    <View className='help-link__ask'>
                        <Navigator url="/pages/webview/attention" className='index__Navigator'>
                            <View
                                className='help-link__title'
                            >
                                <Text className='help-link__title-text'>
                                    上课须知 ？
                </Text>
                            </View>
                        </Navigator>
                        <Navigator url="/pages/webview/guide" className='index__Navigator'>
                            <View
                                className='help-link__title help-link__title-noborder'
                            >
                                <Text className='help-link__title-text'>上课指南 ？</Text>
                            </View>
                        </Navigator>
                    </View>
                </View>
                <View className='help-link__separator' />
                <View className='help-link__item'>
                    <View className='help-link__icon'>
                        <Image src={help_update} className='help-link__icon-help' />
                    </View>
                    <View className='help-link__ask'>
                        <Navigator url="/pages/webview/update_time" className='index__Navigator'>
                            <View
                                className='help-link__title'
                            >
                                <Text className='help-link__title-text'>
                                    我们多长时间更新一次课程 ？
                </Text>
                            </View>
                        </Navigator>
                        <Navigator url="/pages/webview/update_notice" className='index__Navigator'>
                            <View
                                className='help-link__title'
                            >
                                <Text className='help-link__title-text'>
                                    如何收到课程更新通知 ？
                </Text>
                            </View>
                        </Navigator>
                    </View>
                </View>
                {/* <View className='help-link__separator' />
                <View className='help-link__item'>
                    <View className='help-link__icon'>
                        <Image src={help_account} className='help-link__icon-help' />
                    </View>
                    <View className='help-link__ask'>
                        <Navigator url="/pages/users/help_detail" className='index__Navigator'>
                            <View
                                className='help-link__title'
                            >
                                <Text className='help-link__title-text'>
                                    账号密码忘记如何找回 ？
                </Text>
                            </View>
                        </Navigator>
                        <Navigator url="/pages/users/help_detail" className='index__Navigator'>
                            <View
                                className='help-link__title'
                            >
                                <Text className='help-link__title-text'>
                                    账号有何用用处 ？
                </Text>
                            </View>
                        </Navigator>
                        <Navigator url="/pages/users/help_detail" className='index__Navigator'>
                            <View
                                className='help-link__title help-link__title-noborder'
                            >
                                <Text className='help-link__title-text'>技术要求 ？</Text>
                            </View>
                        </Navigator>
                    </View>
                </View> */}
            </View>
        )
    }
}

export default Help
