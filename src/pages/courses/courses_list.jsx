import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Navigator } from '@tarojs/components'

import './courses_list.scss'
import coursesListBg from '@/src/assets/images/courses/bg.png'

class CoursesList extends Component {
    config = {
        navigationBarTitleText: '课程',
    }
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
    render() {
        const { courseId } = this.state
        return (
            <View className='courses-list'>
                <View className='courses-list-header'>
                    <Image src={coursesListBg} className='courses-list__bg' />
                    <View className='courses-list-header__intro-maintitle'>
                        <Text className='courses-list-header__maintitle-text'>课程 {courseId}</Text>
                    </View>
                    <View className='courses-list-header__intro-subtitle'>
                        <Text className='courses-list-header__subtitle-text'>旨在能让初学者创建计算机程序，在这个过程中帮助他们学习如何与他人进行协作、提高解决问题的能力，并通过不断努力完成艰巨的任务。</Text>
                    </View>
                </View>
                <View className='courses-list-item__container'>
                    <Navigator url='/pages/webview/courses_detail?courseId=1&stageId=2&classId=1' className='index__Navigator'>
                        <View className='courses-list-item'>
                            <View className='courses-list-item__thumb'><Image src='https://studio.code.org/blockly/media/skins/jigsaw/smiley.png' className='courses-list-item__thumb-img' /></View>
                            <View className='courses-list-item__intro-container'>
                                <View className='courses-list-item__intro-maintitle'>
                                    <Text className='courses-list-item__maintitle'>游戏实验室</Text>

                                </View>
                                <View className='courses-list-item__intro'>
                                    <Text className='courses-list-item__text'>总共 12 小节</Text>
                                </View>
                            </View>
                        </View>
                    </Navigator>
                    <Navigator url='/pages/webview/courses_detail?courseId=1&stageId=3&classId=1' className='index__Navigator'>
                        <View className='courses-list-item'>
                            <View className='courses-list-item__thumb'><Image src='https://studio.code.org/blockly/media/skins/jigsaw/snail.png' className='courses-list-item__thumb-img' /></View>
                            <View className='courses-list-item__intro-container'>
                                <View className='courses-list-item__intro-maintitle'>
                                    <Text className='courses-list-item__maintitle'>游戏实验室</Text>

                                </View>
                                <View className='courses-list-item__intro'>
                                    <Text className='courses-list-item__text'>总共 12 小节</Text>
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
