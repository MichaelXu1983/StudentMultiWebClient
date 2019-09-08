import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'

class AgreementDetail extends Component {
    config = {
        navigationBarTitleText: '使用协议',
    }
    constructor() {
        super(...arguments)
        this.state = {
            detailNodes: [],
        }
        this.env = process.env.TARO_ENV
    }
    componentDidMount() {
        this.setState({
            detailNodes: [
                {
                    name: 'div',
                    attrs: { class: 'article-detail__title' },
                    children: [{ type: 'text', text: '使用协议' }],
                },
                {
                    name: 'div',
                    attrs: { class: 'article-detail__subtitle' },
                    children: [{ type: 'text', text: '最后修订日期：2018年9月10日' }],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '我们的核心课程和课程视频来自于 Code.org，CODE® 徽标设计是 Code.org 的注册商标，该部分版权也归属于他。它是一家非营利组织，致力于通过在更多学校推出计算机科学，以及增加女性和代表性不足的学生的参与度来扩大计算机科学的参与。他们很自豪能够在全球范围内完全免费提供他们的所有课程和课程内容，而无需任何必要的合作伙伴关系来在您的学校或组织中使用我们的材料！',
                        },
                    ],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text: '在访问或使用服务之前，请仔细阅读这些服务条款（“ 条款 ”）。访问或使用服务的任何部分或点击可能对您提供的“我同意”或“注册”按钮意味着您同意受这些条款的约束而不做任何修改。',
                        },
                    ],
                },
                {
                    name: 'p',
                    attrs: { class: 'article-detail__text' },
                    children: [
                        {
                            type: 'text',
                            text:
                                '这些条款可能会有所变化。如果您在这些条款发生变更后继续使用服务，则表示您同意接受此类更改的约束，因此请定期查看这些条款。',
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

export default AgreementDetail
