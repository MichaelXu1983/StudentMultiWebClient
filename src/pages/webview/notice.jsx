import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class NoticeDetail extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.codekid.top/#/pages/webview/notice_detail'
        }
        this.env = process.env.TARO_ENV
    }
    config = {
        navigationBarTitleText: '公告详细',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default NoticeDetail