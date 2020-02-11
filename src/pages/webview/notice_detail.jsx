import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import httpRequest from '@/src/utils/request'

class NoticeDetail extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      detailString: ''
    }
    this.env = process.env.TARO_ENV
  }
  componentDidMount() {
    const { siteId, channelId, id } = this.$router.params
    httpRequest.get(`/api/v1/contents/${siteId}/${channelId}/${id}`).then(r => {
      this.setState({
        detailString: r.data.value.content
      })
    })
  }
  config = {
    navigationBarTitleText: '公告中心',
  }
  render() {
    return (
      <View className='article-detail'>
        <RichText className='article-detail__richtext' nodes={this.state.detailString} />
      </View>
    )
  }
}

export default NoticeDetail
