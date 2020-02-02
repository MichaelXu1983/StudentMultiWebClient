import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class Agreement extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.codekid.top/#/pages/webview/agreement_detail'
        }
        this.env = process.env.TARO_ENV
    }
    config = {
        navigationBarTitleText: '使用协议',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default Agreement
