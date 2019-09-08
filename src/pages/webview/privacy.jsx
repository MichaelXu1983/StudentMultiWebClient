import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class Privacy extends Component {
    config = {
        navigationBarTitleText: '隐私政策',
    }
    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.codekid.top/#/pages/webview/privacy_detail'
        }
        this.env = process.env.TARO_ENV
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default Privacy
