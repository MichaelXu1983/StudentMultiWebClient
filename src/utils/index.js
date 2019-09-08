import Taro from '@tarojs/taro'
import '@tarojs/async-await'

function isEmptyObject(obj) {
    if (!obj) {
        return true
    }
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false
        }
    }
    return true
}

//获取当前系统信息
function getSystemInfo() {
    try {
        const systemInfo = Taro.getStorageSync('SYSTEMINFO')
        if (systemInfo !== '') {
            return systemInfo
        }
    } catch (err) {
        console.log(err)
    }

    try {
        const systemInfo = Taro.getSystemInfoSync()
        Taro.setStorageSync('SYSTEMINFO', systemInfo)
        return systemInfo
    } catch (err) {
        console.log(err)
        return {}
    }
}

function showShareMenu() {
    if (process.env.TARO_ENV === 'qq') {
        qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
    } else if (process.env.TARO_ENV === 'tt') {
        tt.showShareMenu({
            success(res) {
                console.log(`showShareMenu 调用成功`);
            },
            fail(res) {
                console.log(`showShareMenu 调用失败`);
            }
        });
    }
}
export {
    isEmptyObject,
    getSystemInfo,
    showShareMenu,
}