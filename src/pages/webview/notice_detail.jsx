import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'

class HelpDetail extends Component {
  config = {
    navigationBarTitleText: '袋小鼠爱编程应用上线了',
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
          children: [{ type: 'text', text: '袋小鼠爱编程上线啦' }],
        },
        {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '我们是做什么的' }],
        },
        {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [
            {
              type: 'text',
              text: '袋小鼠爱编程是针对 4-18 岁少儿，在线编程教育的应用。',
            },
          ],
        },
        {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '在哪可以找到我们' }],
        },
        {
          name: 'p',
          attrs: { class: 'article-detail__text' },
          children: [
            {
              type: 'text',
              text: '袋小鼠爱编程应用，在微信、QQ、百度、头条、抖音小程序和苹果、安卓商店都可以找到。',
            },
          ],
        },
        {
          name: 'div',
          attrs: { class: 'article-detail__subtitle' },
          children: [{ type: 'text', text: '我们的愿景是什么' }],
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

export default HelpDetail
