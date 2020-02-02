import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'

class AttentionDetail extends Component {

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
                    children: [{ type: 'text', text: '我们多长时间更新一次课程' }],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '通过 Code.org ©' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: 'Code.org © 会不定期更新课程，最近 4 次更新分别是：2018年3月和4月、2018年5月至7月、2018年8月至10月、2018年11月至2019年3月',
                        },
                    ],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '通过为中国小朋友定制课程' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '我们会持续开发适合中国小朋友的课程，不同于 Code.org © 面向全球，我们会根据中国环境为中国小朋友定制课程。',
                        },
                    ],
                },
            ]
        })
    }
    config = {
        navigationBarTitleText: '我们多长时间更新一次课程',
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
