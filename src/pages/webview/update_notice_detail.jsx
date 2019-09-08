import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'

class AttentionDetail extends Component {
    config = {
        navigationBarTitleText: '如何收到课程更新通知',
    }
    constructor() {
        super(...arguments)
        this.state = {
            detailNodes: [],
        }
        this.env = process.env.TARO_ENV
    }
    componentDidMount() {
        console.log(this.$router.params.id)
        this.setState({
            detailNodes: [
                {
                    name: 'div',
                    attrs: { class: 'article-detail__title' },
                    children: [{ type: 'text', text: '如何收到课程更新通知' }],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '应用内' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '在应用内，您可以通过 [首页]左上角小喇叭上的小红点，得知有课程更新，还可以通过 [首页]-[最新公告] 或者 [我的]-[公告中心] 查看具体的课程更新内容',
                        },
                    ],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '应用外' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '在应用外，您可以通过应用宿主 APP，收到课程更新通知。',
                        },
                    ],
                },
            ]
        })
    }

    render() {
        return (
            <View className='article-detail'>
                <RichText className='article-detail__richtext' nodes={this.state.detailNodes} />
            </View>
        )
    }
}

export default AttentionDetail
