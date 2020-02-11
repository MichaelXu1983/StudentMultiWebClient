import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  Navigator
} from '@tarojs/components'

import indexBg from '@/src/assets/images/index/index_bg.png'
import messageIcon from '@/src/assets/images/index/message.png'
import noticeIcon from '@/src/assets/images/index/notice.png'
import ok from '@/src/assets/images/index/ok.png'
import guide_bg_left from '@/src/assets/images/index/guide_bg_left.png'
import guide_bg_right from '@/src/assets/images/index/guide_bg_right.png'
import { showShareMenu, businessDomain } from '@/src/utils/index'
import httpRequest from '@/src/utils/request'
import styles from './index.module.scss'

class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      recomList: [],
      hasNewNotice: false,   // 新公告提示红点
      hasNewMessage: false,  // 新消息提示红点
    }
    this.env = process.env.TARO_ENV
  }
  componentDidMount() {
    httpRequest.get('/api/v1/contents/1/172').then(r => {
      this.setState({
        recomList: r.data.value
      })
    })
    showShareMenu() // 开启页面分享按钮
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    const { recomList } = this.state
    
    return (
      <View className={styles['index']}>
        <Image src={indexBg} className={styles['index__bg']} />
        <View className={styles['index-header']}>
          <Navigator url='/pages/index/notice_list' className={styles['index__Navigator']}>
            <Image src={noticeIcon} className={styles['index__notice']} />
            {this.state.hasNewNotice && (<View className={styles['index__notice-status']}><View className={styles['index__notice-status-border']}></View></View>)}
          </Navigator>
          <Navigator url='/pages/index/message_list' className={styles['index__Navigator']}>
            <Image src={messageIcon} className={styles['index__message']} />
            {this.state.hasNewMessage && (<View className={styles['index__message-status']}><View className={styles['index__message-status-border']}></View></View>)}
          </Navigator>
        </View>
        <View className={styles['index-card']}>
          <View className={styles['index-card__username']}>
            <Text className={styles['index-card__username-text']}>
              亲爱的小朋友
            </Text>
          </View>
          <Navigator url='/pages/courses/index' className={styles['index__Navigator']} open-type='switchTab'>
            <View className={styles['index-card__button']}>
              <Text className={styles['index-card__button-text']}>开始学习</Text>
            </View>
          </Navigator>
          <View className={styles['index-card__tips']}>
            <Text className={styles['index-card__tips-text']}>
              点击【开始学习】，开始你的编程之旅
            </Text>
          </View>
          <View className={styles['index-card__footer']}>
            <View className={styles['index-card__icon']}>
              <Image src={ok} className={styles['index-card__icon-ok']} />
              <Text className={styles['index-card__icon-text']}>编程</Text>
            </View>
            <View className={styles['index-card__icon']}>
              <Image src={ok} className={styles['index-card__icon-ok']} />
              <Text className={styles['index-card__icon-text']}>逻辑</Text>
            </View>
            <View className={styles['index-card__icon']}>
              <Image src={ok} className={styles['index-card__icon-ok']} />
              <Text className={styles['index-card__icon-text']}>思维</Text>
            </View>
          </View>
        </View>
        <View className={styles['index-notice']}>
          <View className={styles['index__maintitle']}>
            <Text className={styles['index__maintitle-text']}>最新推荐</Text>
          </View>
          <Swiper autoplay circular interval={8000} duration={3000} className={styles['index-notice__swiper']}>
            {Array.isArray(recomList) && recomList.length !== 0 && recomList.map(item => (
              <SwiperItem key={item.id}>
                <Navigator url={`/pages/webview/recom_detail?source=${item.source}`} className={styles['index-notice__swiper-Navigator']}>
                  <Image src={businessDomain + item.imageUrl} className={styles['index-notice__swiper-img']} />
                </Navigator>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
        <View className={styles['index-guide']}>
          <View className={styles['index__maintitle']}>
            <Text className={styles['index__maintitle-text']}>上课指引</Text>
          </View>
          <View className={styles['index-guide__content']}>
            <Navigator url='/pages/webview/attention_detail' className={styles['index__Navigator']}>
              <Image src={guide_bg_left} className={styles['index-guide__bg-left']} />
            </Navigator>
            <Navigator url='/pages/webview/guide_detail' className={styles['index__Navigator']}>
              <Image src={guide_bg_right} className={styles['index-guide__bg-right']} />
            </Navigator>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
