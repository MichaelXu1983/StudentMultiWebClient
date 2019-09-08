import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  Navigator
} from '@tarojs/components'

import './index.scss'

import indexBg from '@/src/assets/images/index/index_bg.png'
import messageIcon from '@/src/assets/images/index/message.png'
import noticeIcon from '@/src/assets/images/index/notice.png'
import ok from '@/src/assets/images/index/ok.png'
import guide_bg_left from '@/src/assets/images/index/guide_bg_left.png'
import guide_bg_right from '@/src/assets/images/index/guide_bg_right.png'
import banner from '@/src/assets/images/tmp/banner.jpg'

import { showShareMenu } from '@/src/utils/index'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      noticeImg: [
        'https://zos.alipayobjects.com/rmsportal/IJOtIlfsYdTyaDTRVrLI.png',
      ],
      hasNewNotice: false,   // 新公告提示红点
      hasNewMessage: false,  // 新消息提示红点
    }
    this.env = process.env.TARO_ENV
  }

  componentDidMount() {
    showShareMenu() // 开启页面分享按钮
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Image src={indexBg} className='index__bg' />
        <View className='index-header'>
          <Navigator url="/pages/index/notice_list" className='index__Navigator'>
            <Image src={noticeIcon} className='index__notice' />
            {this.state.hasNewNotice && (<View className='index__notice-status'><View className='index__notice-status-border'></View></View>)}
          </Navigator>
          <Navigator url="/pages/index/message_list" className='index__Navigator'>
            <Image src={messageIcon} className='index__message' />
            {this.state.hasNewMessage && (<View className='index__message-status'><View className='index__message-status-border'></View></View>)}
          </Navigator>
        </View>
        <View className='index-card'>
          <View className='index-card__username'>
            <Text className='index-card__username-text'>
              亲爱的小朋友
            </Text>
          </View>
          <Navigator url="/pages/courses/index" className='index__Navigator' open-type="switchTab">
            <View className='index-card__button'>
              <Text className='index-card__button-text'>开始学习</Text>
            </View>
          </Navigator>
          <View className='index-card__tips'>
            <Text className='index-card__tips-text'>
              点击【开始学习】，开始你的编程之旅
            </Text>
          </View>
          <View className='index-card__footer'>
            <View className='index-card__icon'>
              <Image src={ok} className='index-card__icon-ok' />
              <Text className='index-card__icon-text'>编程</Text>
            </View>
            <View className='index-card__icon'>
              <Image src={ok} className='index-card__icon-ok' />
              <Text className='index-card__icon-text'>逻辑</Text>
            </View>
            <View className='index-card__icon'>
              <Image src={ok} className='index-card__icon-ok' />
              <Text className='index-card__icon-text'>思维</Text>
            </View>
          </View>
        </View>
        <View className='index-notice'>
          <View className='index__maintitle'>
            <Text className='index__maintitle-text'>最新公告</Text>
          </View>
          <Swiper className='index-notice__swiper'>
            {this.state.noticeImg.map(val => (
              <SwiperItem key={val}>
                <Navigator url="/pages/webview/notice" className='index-notice__swiper-Navigator'>
                  <Image src={banner} className='index-notice__swiper-img' />
                </Navigator>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
        <View className='index-guide'>
          <View className='index__maintitle'>
            <Text className='index__maintitle-text'>上课指引</Text>
          </View>
          <View className='index-guide__content'>
            <Navigator url="/pages/webview/attention" className='index__Navigator'>
              <Image src={guide_bg_left} className='index-guide__bg-left' />
            </Navigator>
            <Navigator url="/pages/webview/guide" className='index__Navigator'>
              <Image src={guide_bg_right} className='index-guide__bg-right' />
            </Navigator>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
