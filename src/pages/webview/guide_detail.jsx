import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'

class GuideDetail extends Component {

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
                    children: [{ type: 'text', text: '上课指南' }],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '无需帐户' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '学生可以立即开始编写一些教程，而无需创建帐户！他们只需打开我们的应用，然后点击首页的“开始学习”按钮，即可进入可以选择要处理的课程的页面。 ',
                        },
                    ],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '为何选择计算机科学' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text:
                                '我们相信世界各地的每个学生都应该有机会学习计算机科学。它有助于培养解决问题的技能，逻辑和创造力。通过提前入学，学生将在任何21世纪的职业道路上获得成功的基础。',
                        },
                    ],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '我应该先开始学习哪种编码语言' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text:
                                '这是我们经常被问到的一个问题 - 而且没有一个明确的答案。这取决于你已经知道的，以及为什么你想要了解更多！如果您以前从未尝试过编码，请先使用拖放操作来学习概念。如果你之前尝试过拖放编程并想尝试基于文本的编码，那么最广泛使用的编程语言就是 JavaScript。如果您想构建特定的内容，例如 Android 应用，iOS 应用，网站或数据库，则每种内容都有特定的语言。',
                        },
                    ],
                },
            ]
        })
    }
    config = {
        navigationBarTitleText: '上课指南',
    }
    render() {
        return (
            <View className='article-detail'>
                <RichText className='article-detail__richtext' nodes={this.state.detailNodes} />
            </View>
        )
    }
}

export default GuideDetail
