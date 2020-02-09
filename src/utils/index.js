import Taro from '@tarojs/taro'

const businessDomain = 'https://www.tdreamer.com'

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
        // eslint-disable-next-line no-undef
        qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
    } else if (process.env.TARO_ENV === 'tt') {
        // eslint-disable-next-line no-undef
        tt.showShareMenu({
            success() {
                console.log(`showShareMenu 调用成功`);
            },
            fail() {
                console.log(`showShareMenu 调用失败`);
            }
        });
    }
}
export {
    businessDomain,
    isEmptyObject,
    getSystemInfo,
    showShareMenu,
}