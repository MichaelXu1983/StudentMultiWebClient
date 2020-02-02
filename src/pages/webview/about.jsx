import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class Attention extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.codekid.top/#/pages/webview/about_detail'
        }
        this.env = process.env.TARO_ENV
    }
    config = {
        navigationBarTitleText: '关于我们',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default Attention
