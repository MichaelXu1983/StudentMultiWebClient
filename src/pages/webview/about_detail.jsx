import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'

class About extends Component {
  config = {
    navigationBarTitleText: '关于我们',
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
          name: 'img',
          attrs: {
            class: 'article-detail__img-block',
            alt: '袋小鼠爱编程',
            width: '140',
            height: '140',
            src:
              'https://videos.codekid.top/kangaroo_logo.png',
          },
        },
        {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [
            {
              type: 'text',
              text: ' 我们是一个非营利的组织，核心课程来自于 Code.org，他们也是一家非营利组织，致力于通过在更多学校推出计算机科学，以及增加女性和代表性不足的学生的参与度来扩大计算机科学的参与。他们很自豪能够在全球范围内完全免费提供他们的所有课程和课程内容，而无需任何必要的合作伙伴关系来在您的学校或组织中使用我们的材料！而我们也基于此种精神，致力于扩大 4-18 岁中国孩子学习计算机科学的机会，尽可能帮助他们从小建立编程思维，从而培养解决问题的能力。',
            },
          ],
        },
        {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [
            {
              type: 'text',
              text: '我们的愿景是：让中国每个学校的每个学生都能像语文、数学、英语一样学习计算机科学。',
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

export default About
