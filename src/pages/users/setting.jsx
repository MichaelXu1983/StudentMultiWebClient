import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Navigator } from '@tarojs/components'
import './setting.scss'
import arrowRight from '@/src/assets/images/other/arrow_right.png'

import { getSystemInfo, isEmptyObject } from '@/src/utils/index'


class Setting extends Component {
    config = {
        navigationBarTitleText: '设置',
    }
    constructor() {
        super(...arguments)
        this.state = {
            systemInfo: {
                SDKVersion: '',
                
            },
        }
        this.env = process.env.TARO_ENV
    }
    componentDidMount() {
        const systemData = getSystemInfo() // 获取设备信息
        if (systemData || !isEmptyObject(systemData)) {
            const { SDKVersion } = systemData
            this.setState(
                {
                    systemInfo: {
                        SDKVersion,
                    },
                },
                () => { }
            )
        }
    }
    // onLogout() {
    //     Taro.showModal({
    //         title: '提示',
    //         content: '确定要退出当前账号？',
    //         showCancel: true,
    //         cancelText: '取消',
    //         cancelColor: '#7f7f7f',
    //         confirmText: '退出登录',
    //         confirmColor: '#f43530',
    //         success(modalRes) {
    //             if (modalRes.confirm) {
    //                 try {
    //                     Taro.clearStorage()
    //                     jumpUrl('/pages/users/login')
    //                 } catch (e) {
    //                     console.info(e)
    //                 }
    //             } else if (res.cancel) {
    //                 console.log('用户点击取消授权弹窗')
    //             }
    //         },
    //     })
    // }

    render() {
        const {
            systemInfo: { SDKVersion },
        } = this.state
        return (
            <View className='setting'>
                <View className='setting-link'>
                    {/* <Navigator url="/pages/users/password" className='index__Navigator'>
                        <View className='setting-link__item'>
                            <View className='setting-link__title'>
                                <Text className='setting-link__title-text'>修改密码</Text>
                            </View>

                            <View className='setting-link__arrow'>
                                <Image src={arrowRight} className='setting-link__arrow--active' />
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url="/pages/users/security" className='index__Navigator'>
                        <View className='setting-link__item'>
                            <View className='setting-link__title'>
                                <Text className='setting-link__title-text'>修改密保</Text>
                            </View>

                            <View className='setting-link__arrow'>
                                <Image src={arrowRight} className='setting-link__arrow--active' />
                            </View>
                        </View>
                    </Navigator> */}
                    <Navigator url="/pages/webview/about" className='index__Navigator'>
                        <View className='setting-link__item'>
                            <View className='setting-link__title'>
                                <Text className='setting-link__title-text'>关于我们</Text>
                            </View>
                            <View className='setting-link__extra'>
                                <Text className='setting-link__extra-text'>{SDKVersion ? 'v' + SDKVersion : ''}</Text>
                            </View>
                            <View className='setting-link__arrow'>
                                <Image src={arrowRight} className='setting-link__arrow--active' />
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url="/pages/webview/agreement" className='index__Navigator'>
                        <View className='setting-link__item'>
                            <View className='setting-link__title'>
                                <Text className='setting-link__title-text'>使用协议</Text>
                            </View>

                            <View className='setting-link__arrow'>
                                <Image src={arrowRight} className='setting-link__arrow--active' />
                            </View>
                        </View>
                    </Navigator>
                </View>
                {/* <View className='am-buttons'>
                    <Button
                        type='primary'
                        className='am-button-primary'
                        onClick={this.onLogout.bind(this)}

                    >
                        <Text className='am-button-primary-text'>退出登录</Text>
                    </Button>
                </View> */}

            </View>
        )
    }
}

export default Setting
