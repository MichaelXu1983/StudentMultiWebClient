import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Navigator } from '@tarojs/components'
import usersBg from '@/src/assets/images/users/users_bg.png'
import arrowRight from '@/src/assets/images/other/arrow_right.png'
import help from '@/src/assets/images/users/icon/help.png'
import customer from '@/src/assets/images/users/icon/customer.png'
import setting from '@/src/assets/images/users/icon/setting.png'
import message from '@/src/assets/images/users/icon/crown.png'
import notice from '@/src/assets/images/users/icon/notice.png'
import praise from '@/src/assets/images/users/icon/praise.png'
import avatar from '@/src/assets/images/other/avatar.png'

import { showShareMenu } from '@/src/utils/index'

import styles from './index.module.scss'

class Users extends Component {

    constructor() {
        super(...arguments)
        this.env = process.env.TARO_ENV
    }

    componentDidMount() {
        showShareMenu() // 开启页面分享按钮
    }
    config = {
        navigationBarTitleText: '我的',
    }
    onShowContact() {
        Taro.makePhoneCall({
            phoneNumber: '4008034725'
        })
    }

    onShareAppMessage(res) {
        if (this.env === 'h5') {
            Taro.showModal({
                title: '提示',
                content: '微信小程序搜索【袋小鼠爱编程】，点击【我的】-【分享给小伙伴】',
                showCancel: false,
                cancelText: '取消',
                cancelColor: '#7f7f7f',
                confirmText: '知道了',
                confirmColor: '#7d4c9f',
                success() {
                    // if (modalRes.confirm) {
                    //   Taro.openSetting({
                    //     success(data) {
                    //       console.log('打开微信设置授权页面成功')
                    //     },
                    //     fail(data) {
                    //       console.log('打开微信设置授权页面失败')
                    //     },
                    //   })
                    // } else if (res.cancel) {
                    //   console.log('用户点击取消授权弹窗')
                    // }
                },
            })
        } else {
            if (res.from === 'button') {
                // 来自页面内转发按钮
                console.log(res.target)
            }
            let pages = Taro.getCurrentPages()
            let page = pages[pages.length - 1]
            let path = `${page.route}?id=${pages}`
            let imageUrl = 'https://videos.codekid.top/share_pic.jpg' // 可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG 。显示图片长宽比是 5:4
            return {
                title: '欢迎来到少儿编程实验室', // 默认当前小程序名称
                path,
                imageUrl,
                success: function () {
                    Taro.showToast({
                        title: '转发成功！',
                        icon: 'success',
                    })
                },
                fail: function () {
                    Taro.showToast({
                        title: '转发失败！',
                        icon: 'none',
                    })
                },
            }
        }
    }

    render() {

        return (
            <View className={styles['users']}>
                <Image src={usersBg} className={styles['users__bg']} />
                <View className={styles['users__avatarUrl']}>
                    <Image src={avatar} className={styles['users__avatarUrl-img']} />
                </View>
                <View className={styles['users-card']}>
                    <View className={styles['users-card__username']}>
                        <Text className={styles['users-card__text-title']}>
                            小朋友
                        </Text>
                    </View>
                </View>
                <View className={styles['users-link']}>
                    <Navigator url='/pages/index/recomm_list' className={styles['index__Navigator']}>
                        <View className={styles['users-link__item']}>
                            <View className={styles['users-link__icon']}>
                                <Image src={message} className={styles['users-link__icon-help']} />
                            </View>
                            <View className={styles['users-link__title']}>
                                <Text className={styles['users-link__title-text']}>官方推荐</Text>
                            </View>
                            <View className={styles['users-link__subtitle']}>
                                <Text className={styles['users-link__subtitle-text']}></Text>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url='/pages/index/notice_list' className={styles['index__Navigator']}>
                        <View className={styles['users-link__item']}>
                            <View className={styles['users-link__icon']}>
                                <Image src={notice} className={styles['users-link__icon-help']} />
                            </View>
                            <View className={styles['users-link__title']}>
                                <Text className={styles['users-link__title-text']}>公告中心</Text>
                            </View>
                            <View className={styles['users-link__subtitle']}>
                                <Text className={styles['users-link__subtitle-text']}></Text>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View>

                    </Navigator>
                    <Navigator url='/pages/users/help_list' className={styles['index__Navigator']}>
                        <View className={styles['users-link__item']}>
                            <View className={styles['users-link__icon']}>
                                <Image src={help} className={styles['users-link__icon-help']} />
                            </View>
                            <View className={styles['users-link__title']}>
                                <Text className={styles['users-link__title-text']}>帮助中心</Text>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url='/pages/users/setting' className={styles['index__Navigator']}>
                        <View className={styles['users-link__item']}>
                            <View className={styles['users-link__icon']}>
                                <Image src={setting} className={styles['users-link__icon-help']} />
                            </View>
                            <View className={styles['users-link__title']}>
                                <Text className={styles['users-link__title-text']}>设置</Text>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View>
                    </Navigator >

                    {this.env === 'weapp' ? (
                        <View className={styles['users-link__item']}>
                            <View className={styles['users-link__icon']}>
                                <Image src={customer} className={styles['users-link__icon-help']} />
                            </View>
                            <View>
                                <View className={styles['users-link__title']}>
                                    <Text className={styles['users-link__title-text']}>在线客服 </Text>
                                </View>
                                <View className={styles['users-link__subtitle']}>
                                    <contact-button> </contact-button>
                                </View>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View>
                    ) : this.env === 'swan' ? (
                        <View className={styles['users-link__item']}>
                            <View className={styles['users-link__icon']}>
                                <Image src={customer} className={styles['users-link__icon-help']} />
                            </View>
                            <View>
                                <View className={styles['users-link__title']}>
                                    <Text className={styles['users-link__title-text']}>在线客服 </Text>
                                </View>
                                <View className={styles['users-link__subtitle']}>
                                    <Button size='mini' plain open-type='contact' >客服</Button>
                                </View>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View>
                    ) : (this.env === 'alipay' ? (
                        <View className={styles['users-link__item']}>
                            <View className={styles['users-link__icon']}>
                                <Image src={customer} className={styles['users-link__icon-help']} />
                            </View>
                            <View onClick={this.onShowContact.bind(this)}>
                                <View className={styles['users-link__title']}>
                                    <Text className={styles['users-link__title-text']}>客服电话</Text>
                                </View>
                                <View className={styles['users-link__subtitle']}>
                                    <Text className={styles['users-link__subtitle-text']}>400-803-4725</Text>
                                </View>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View>
                    ) : (null)
                            )}

                    {this.env === 'qq' ? (
                        <View className={styles['users-link__item']} onClick={this.onShareAppMessage.bind(this)}>
                            <View className={styles['users-link__icon']}>
                                <Image src={praise} className={styles['users-link__icon-help']} />
                            </View>
                            <View className={styles['users-link__title']}>
                                <Text className={styles['users-link__title-text']}>分享给小伙伴</Text>
                            </View>
                            <View className={styles['users-link__subbutton--qq']}>
                                <Button size='mini' type='default' open-type='share' >去分享</Button>
                            </View>
                            <View className={styles['users-link__arrow']}>
                                <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                            </View>
                        </View >
                        // <View className={styles['users-link__item' onClick={this.onShareAppMessage.bind(this)}>
                        //     <View className={styles['users-link__icon']}>
                        //         <Image src={praise} className={styles['users-link__icon-help']} />
                        //     </View>
                        //     <View
                        //         className={styles['users-link__title'
                        //     >
                        //         <Text className={styles['users-link__title-text']}>分享给小伙伴</Text>
                        //     </View>
                        //     <View className={styles['users-link__subbutton']}>
                        //         <Button size='mini' plain open-type='share' >去分享</Button>
                        //     </View>
                        //     <View className={styles['users-link__arrow']}>
                        //         <Image src={arrowRight} className={styles['users-link__arrow--active']} />
                        //     </View>
                        // </View >
                    ) : (
                            null
                        )

                    }
                </View >
            </View >
        )
    }
}

export default Users
