import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class Attention extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.codekid.top/#/pages/webview/update_time_detail'
        }
        this.env = process.env.TARO_ENV
    }
    config = {
        navigationBarTitleText: '上课须知',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default Attention
