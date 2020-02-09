import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'


class RecomDetail extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            url: 'https://www.tdreamer.com/channels/154.html'
        }
        this.env = process.env.TARO_ENV
    }
    componentWillMount() {
        const { source } = this.$router.params
        source !== '' && this.setState({
            url: source
        })
    }
    config = {
        navigationBarTitleText: '最新推荐',
    }
    render() {
        return (
            <WebView src={this.state.url} />
        )
    }
}
export default RecomDetail
