import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class CourseDetail extends Component {
    config = {
        navigationBarTitleText: '课程',
    }
    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://studio.codekid.top/s/course1/stage/1/puzzle/1'
        }
        this.env = process.env.TARO_ENV
    }
    componentWillMount() {
        this.setState({
            url: `https://studio.codekid.top/s/course${this.$router.params.courseId}/stage/${this.$router.params.stageId}/puzzle/${this.$router.params.classId}`
        })
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default CourseDetail
