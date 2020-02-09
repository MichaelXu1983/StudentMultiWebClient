import Taro from '@tarojs/taro'

// 请求拦截器
const customInterceptor = (chain) => {
    const requestParams = chain.requestParams
    return chain.proceed(requestParams).then(res => {
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
            return Promise.reject("请求资源不存在")

        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
            return Promise.reject("服务端出现了问题")

        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
            // TODO 根据自身业务修改
            // Taro.setStorageSync("Authorization", "")
            return Promise.reject("没有权限访问");

        } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
            // TODO 根据自身业务修改
            // Taro.setStorageSync("Authorization", "")
            return Promise.reject("需要鉴权")

        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
            return res.data

        }
    })
}

const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]

interceptors.forEach(i => Taro.addInterceptor(i))

// http 状态配置
const HTTP_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    CLIENT_ERROR: 400,
    AUTHENTICATE: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}

const getBaseUrl = (url) => {
    // 根据请求不同返回不同的 BASE_URL
    let BASE_URL = '';
    if (process.env.NODE_ENV === 'development') {
        // 开发环境
        if (url.includes('/api/')) {
            BASE_URL = 'https://www.tdreamer.com'
            // BASE_URL = ''
        } else {
            BASE_URL = ''
        }
    } else {
        // 生产环境
        if (url.includes('/api/')) {
            BASE_URL = 'https://www.tdreamer.com'
        } else {
            BASE_URL = ''
        }
    }
    return BASE_URL
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

class httpRequest {
    baseOptions(params, method = "GET") {
        let { url, data } = params;
        const BASE_URL = getBaseUrl(url);
        let contentType = "application/json";
        contentType = params.contentType || contentType;
        const option = {
            url: BASE_URL + url,
            data: data,
            method: method,
            header: {
                'content-type': contentType,
                'X-SS-API-KEY': '7538c18a-9588-40c5-995b-b8a4adf04095' // 第三方生成
                //   'Authorization': Taro.getStorageSync('Authorization')
            }
        };
        return Taro.request(option);
    }

    get(url, data = "") {
        let option = { url, data };
        return this.baseOptions(option);
    }

    post(url, data, contentType) {
        let params = { url, data, contentType };
        return this.baseOptions(params, "POST");
    }

    put(url, data = "") {
        let option = { url, data };
        return this.baseOptions(option, "PUT");
    }

    delete(url, data = "") {
        let option = { url, data };
        return this.baseOptions(option, "DELETE");
    }

}

export default new httpRequest()