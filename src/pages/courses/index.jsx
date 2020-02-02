import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Navigator } from '@tarojs/components'
import coursesBg from '@/src/assets/images/courses/bg.png'
import { showShareMenu } from '@/src/utils/index'
import styles from './index.module.scss'

class Courses extends Component {
  componentDidMount() {
    showShareMenu() // 开启页面分享按钮
  }
  config = {
    navigationBarTitleText: '课程',
  }
  render() {
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
          <Navigator url='/pages/webview/courses_detail?courseId=1&stageId=2&classId=2' className={styles['index__Navigator']}>
            <View className={styles['courses-item']}>
              <View className={styles['courses-item__thumb']}>
                <View className={styles['courses-item__thumb-loading']}></View>
                <Image src='https://studio.code.org/shared/images/courses/logo_tall_course1.jpg' className={styles['courses-item__thumb-img']} />
              </View>
              <View className={styles['courses-item__maintitle']}>
                <Text className={styles['courses-item__maintitle-text']}>课程 1<Text className={styles['courses-item__subscript']}>（4-6岁）</Text></Text>
              </View>
              <View className={styles['courses-item__subtitle']}>
                <Text className={styles['courses-item__subtitle-text']}>为较小的读者准备的计算机科学简介</Text>
              </View>
            </View>
          </Navigator>
          <Navigator url='/pages/webview/courses_detail?courseId=2&stageId=1&classId=2' className={styles['index__Navigator']}>
            <View className={styles['courses-item']}>
              <View className={styles['courses-item__thumb']}>
                <View className={styles['courses-item__thumb-loading']}></View>
                <Image src='https://studio.code.org/shared/images/courses/logo_tall_course2.jpg' className={styles['courses-item__thumb-img']} /></View>
              <View className={styles['courses-item__maintitle']}>
                <Text className={styles['courses-item__maintitle-text']}>课程 2<Text className={styles['courses-item__subscript']}>（6岁以上）</Text></Text>
              </View>
              <View className={styles['courses-item__subtitle']}>
                <Text className={styles['courses-item__subtitle-text']}>为可以阅读的学生准备的计算机科学简介</Text>
              </View>
            </View>
          </Navigator>
          <Navigator url='/pages/webview/courses_detail?courseId=3&stageId=1&classId=2' className={styles['index__Navigator']}>
            <View className={styles['courses-item']}>
              <View className={styles['courses-item__thumb']}><View className={styles['courses-item__thumb-loading']}></View><Image src='https://studio.code.org/shared/images/courses/logo_tall_course3.jpg' className={styles['courses-item__thumb-img']} /></View>
              <View className={styles['courses-item__maintitle']}>
                <Text className={styles['courses-item__maintitle-text']}>课程 3<Text className={styles['courses-item__subscript']}>（8-18岁）</Text></Text>
              </View>
              <View className={styles['courses-item__subtitle']}>
                <Text className={styles['courses-item__subtitle-text']}>在创建游戏和交互的故事时，更深入的学习编程，这是课程2的延续</Text>
              </View>
            </View>
          </Navigator>
          <Navigator url='/pages/webview/courses_detail?courseId=3&stageId=19&classId=2' className={styles['index__Navigator']}>
            <View className={styles['courses-item']}>
              <View className={styles['courses-item__thumb']}><View className={styles['courses-item__thumb-loading']}></View><Image src='https://studio.code.org/shared/images/courses/logo_tall_course4.jpg' className={styles['courses-item__thumb-img']} /></View>
              <View className={styles['courses-item__maintitle']}>
                <Text className={styles['courses-item__maintitle-text']}>课程 4<Text className={styles['courses-item__subscript']}>（10-18岁）</Text></Text>
              </View>
              <View className={styles['courses-item__subtitle']}>
                <Text className={styles['courses-item__subtitle-text']}>通过计数循环和带有参数的函数等新概念来建立更复杂的程序，这是课程3的后续</Text>
              </View>
            </View>
          </Navigator>
        </View>
      </View >
    )
  }
}
export default Courses
