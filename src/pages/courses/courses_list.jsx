import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Navigator } from '@tarojs/components'
import coursesListBg from '@/src/assets/images/courses/bg.png'
import styles from './courses_list.module.scss'

class CoursesList extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            courseId: 1
        }
        this.env = process.env.TARO_ENV
    }
    componentWillMount() {
        this.setState({
            courseId: this.$router.params.courseId
        })
    }
    config = {
        navigationBarTitleText: '课程',
    }
    render() {
        const { courseId } = this.state
        return (
            <View className={styles['courses-list']}>
                <View className={styles['courses-list-header']}>
                    <Image src={coursesListBg} className={styles['courses-list__bg']} />
                    <View className={styles['courses-list-header__intro-maintitle']}>
                        <Text className={styles['courses-list-header__maintitle-text']}>课程 {courseId}</Text>
                    </View>
                    <View className={styles['courses-list-header__intro-subtitle']}>
                        <Text className={styles['courses-list-header__subtitle-text']}>旨在能让初学者创建计算机程序，在这个过程中帮助他们学习如何与他人进行协作、提高解决问题的能力，并通过不断努力完成艰巨的任务。</Text>
                    </View>
                </View>
                <View className={styles['courses-list-item__container']}>
                    <Navigator url='/pages/webview/courses_detail?courseId=1&stageId=2&classId=1' className={styles['index__Navigator']}>
                        <View className={styles['courses-list-item']}>
                            <View className={styles['courses-list-item__thumb']}><Image src='https://studio.code.org/blockly/media/skins/jigsaw/smiley.png' className={styles['courses-list-item__thumb-img']} /></View>
                            <View className={styles['courses-list-item__intro-container']}>
                                <View className={styles['courses-list-item__intro-maintitle']}>
                                    <Text className={styles['courses-list-item__maintitle']}>游戏实验室</Text>

                                </View>
                                <View className={styles['courses-list-item__intro']}>
                                    <Text className={styles['courses-list-item__text']}>总共 12 小节</Text>
                                </View>
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url='/pages/webview/courses_detail?courseId=1&stageId=3&classId=1' className={styles['index__Navigator']}>
                        <View className={styles['courses-list-item']}>
                            <View className={styles['courses-list-item__thumb']}><Image src='https://studio.code.org/blockly/media/skins/jigsaw/snail.png' className={styles['courses-list-item__thumb-img']} /></View>
                            <View className={styles['courses-list-item__intro-container']}>
                                <View className={styles['courses-list-item__intro-maintitle']}>
                                    <Text className={styles['courses-list-item__maintitle']}>游戏实验室</Text>

                                </View>
                                <View className={styles['courses-list-item__intro']}>
                                    <Text className={styles['courses-list-item__text']}>总共 12 小节</Text>
                                </View>
                            </View>
                        </View>
                    </Navigator>

                </View>
            </View >
        )
    }
}
export default CoursesList
