import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'

class AttentionDetail extends Component {
    config = {
        navigationBarTitleText: '上课须知',
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
                    children: [{ type: 'text', text: '上课须知' }],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '支持的设备' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '该应用支持任何移动设备使用，包括但不限于手机或者平板。',
                        },
                    ],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '为了保证流畅体验，我们建议您的设备至少使用 WIFI 或者 4G 连接，整个应用大概会消耗不超过 10M 流量。',
                        },
                    ],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '建议在课程中取消设备旋转锁定，并使用横屏，最佳屏幕尺寸为 1024x728 像素或以上。',
                        },
                    ],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '支持的浏览器和平台' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text:
                                '我们为不同浏览器和平台提供的支持级别采取分层方法，以确保我们为大多数用户构建一流的体验，并为其他用户提供可接受的体验。我们支持以下操作系统和浏览器组合：',
                        },
                    ],
                },
                {
                    name: 'img',
                    attrs: {
                        class: 'article-detail__img',
                        alt: '技术要求',
                        width: '100%',
                        src:
                            'http://imgup02.sj88.com/2019-03/01/09/15514050123834_1.jpg',
                    },
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
