import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Navigator } from '@tarojs/components'
import coursesBg from '@/src/assets/images/courses/bg.png'
import { showShareMenu } from '@/src/utils/index'
import httpRequest from '@/src/utils/request'
import styles from './index.module.scss'

class Courses extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: []
    }
    this.env = process.env.TARO_ENV
  }
  componentDidMount() {
    httpRequest.get('/api/v1/contents/1/153').then(r => {
      this.setState({
        list: r.value
      })
    })
    showShareMenu() // 开启页面分享按钮
  }

  config = {
    navigationBarTitleText: '课程',
  }
  render() {
    const { list } = this.state
    return (
      <View className={styles['courses']}>
        <View className={styles['courses-header']}>
          <Image src={coursesBg} className={styles['courses__bg']} />
          <View className={styles['courses-header__intro-maintitle']}>
            <Text className={styles['courses-header__maintitle-text']}>计算机科学基础</Text>
          </View>
          <View className={styles['courses-header__intro-subtitle']}>
            <Text className={styles['courses-header__subtitle-text']}>通过这些面向 4-18 岁年龄段的课程，可以让孩子在动手创造益智游戏过程中，学习到编程思维，这将对他今后的数学、物理、化学等等学科产生积极的影响！</Text>
          </View>
        </View>
        <View className={styles['courses-item__container']}>
          {list.map(item => (
            <Navigator key={item.id} url={item.source} className={styles['index__Navigator']}>
              <View className={styles['courses-item']}>
                <View className={styles['courses-item__thumb']}>
                  <View className={styles['courses-item__thumb-loading']}></View>
                  <Image src={item.imageUrl} className={styles['courses-item__thumb-img']} />
                </View>
                <View className={styles['courses-item__maintitle']}>
                  <Text className={styles['courses-item__maintitle-text']}>{item.title}<Text className={styles['courses-item__subscript']}>{item.subTitle}</Text></Text>
                </View>
                <View className={styles['courses-item__subtitle']}>
                  <Text className={styles['courses-item__subtitle-text']}>{item.summary}</Text>
                </View>
              </View>
            </Navigator>
          ))}

        </View>
      </View >
    )
  }
}
export default Courses
