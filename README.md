## 简介
本项目是使用 [Taro](https://taro.aotu.io/) 开发的应用，目前支持 H5 和微信、QQ、百度、支付宝、字节跳动小程序。  
该应用主要是面对 4-18 岁青少儿在线编程课程的学习。核心课程来自于 Code.org&reg;，它是一家非营利组织，致力于通过在更多学校推出计算机科学，以及增加女性和代表性不足的学生的参与度来扩大计算机科学的参与。他们很自豪能够在全球范围内完全免费提供他们的所有课程和课程内容，而无需任何必要的合作伙伴关系来在您的学校或组织中使用我们的材料！而我们也基于此种精神，致力于扩大 4-18 岁中国孩子学习计算机科学的机会，尽可能帮助他们从小建立编程思维，从而培养解决问题的能力。  
我们的愿景是：让中国每个学校的每个学生都能像语文、数学、外语一样学习计算机科学。

## 技术栈
Taro + Taro UI + Redux + Webpack + ES6

## 截图

## 目录
1. [环境安装](#环境安装)
    * [安装Nvm](#安装Nvm)
    * [安装Node](#安装Node)
    * [安装Nrm](#安装Nrm)
    * [安装Homebrew](#安装Homebrew)
    * [安装Yarn](#安装Yarn)
    * [安装Tarojs](#安装Tarojs)
2. [学习Tarojs](#学习Tarojs)
    * [开发前注意事项](#开发前注意事项)
    * [特殊问题的处理](#特殊问题的处理)
    * [教程](#教程)
3. [使用Tarojs](#使用Tarojs)
    * [创建项目](#创建项目)
    * [配置项目](#配置项目)
    * [设置alias别名](#设置alias别名)


## <a name="环境安装">环境安装</a>
### <a name="安装Nvm">安装Nvm</a>
```shell
# 安装 nvm (npm 安装和版本管理工具，最新版本请到 https://github.com/nvm-sh/nvm 查看)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash 
```

### <a name="安装Node">安装Node</a>
```shell
# 其他版本号，请查看 https://nodejs.org/zh-cn/download/releases/ ，也可执行 `npm install -g n` 和 `sudo n stable` 命令升级
nvm install 8.16.0
```

### <a name="安装Nrm">安装Nrm</a>
```shell
# 安装 nrm
npm install -g nrm

# 列出 npm 源列表
nrm ls

# 切换为淘宝源
nrm use taobao
```

### <a name="安装Homebrew">安装Homebrew</a>
```shell
# 安装 Homebrew（Mac 系统的包管理器，用于安装 macOS 没有预装，但你需要的东西）
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 卸载 Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"

# 验证 Homebrew 是否正确安装
brew doctor

# 修改 Homebrew 源（因为默认是链接国外服务器，速度会很慢，此处修改为国内的）
cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```

### <a name="安装Yarn">安装Yarn</a>
```shell
# 安装 yarn (如果您选择手动安装，用以下步骤添加 Yarn 到 path 变量)
brew install yarn --ignore-dependencies

# 修改 yarn 源
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```  

### <a name="安装Tarojs">安装Tarojs</a>
```shell
# 安装最新的 @tarojs/cli
npm i -g @tarojs/cli@latest 

# 或者 
yarn global add @tarojs/cli@latest
```

## <a name="学习Tarojs">学习Tarojs</a>
### <a name="开发前注意事项">开发前注意事项</a>
[传送门](https://nervjs.github.io/taro/docs/before-dev-remind.html)

### <a name="特殊问题的处理">特殊问题的处理</a>
[传送门](https://nervjs.github.io/taro/docs/specials.html)

### <a name="教程">教程</a>
[传送门](https://nervjs.github.io/taro/docs/spec-for-taro.html)

### <a name="进阶指南">进阶指南</a>
[传送门](https://nervjs.github.io/taro/docs/config.html)

## <a name="使用Tarojs">使用Tarojs</a>
### <a name="创建项目">创建项目</a>
```
# 初始化项目，并按提示输入项目相关信息
taro init StudentMultiWebClient
```

### <a name="配置项目">配置项目</a>
```shell
👽 Taro v1.3.13

Taro即将创建一个新项目!
Need help? Go and open issue: https://github.com/NervJS/taro/issues/new

✔ 拉取远程模板仓库成功！
? 请输入项目介绍！ 学生web多端
? 是否需要使用 TypeScript ？ No
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass
? 请选择模板 redux

✔ 创建项目: StudentMultiWebClient
✔ 创建文件: StudentMultiWebClient/.editorconfig
✔ 创建文件: StudentMultiWebClient/.eslintrc
✔ 创建文件: StudentMultiWebClient/.gitignore
✔ 创建文件: StudentMultiWebClient/package.json
✔ 创建文件: StudentMultiWebClient/project.config.json
✔ 创建文件: StudentMultiWebClient/config/dev.js
✔ 创建文件: StudentMultiWebClient/config/index.js
✔ 创建文件: StudentMultiWebClient/config/prod.js
✔ 创建文件: StudentMultiWebClient/src/app.scss
✔ 创建文件: StudentMultiWebClient/src/app.jsx
✔ 创建文件: StudentMultiWebClient/src/index.html
✔ 创建文件: StudentMultiWebClient/src/actions/counter.js
✔ 创建文件: StudentMultiWebClient/src/constants/counter.js
✔ 创建文件: StudentMultiWebClient/src/reducers/counter.js
✔ 创建文件: StudentMultiWebClient/src/reducers/index.js
✔ 创建文件: StudentMultiWebClient/src/store/index.js
✔ 创建文件: StudentMultiWebClient/src/pages/index/index.scss
✔ 创建文件: StudentMultiWebClient/src/pages/index/index.jsx

✔ cd StudentMultiWebClient, 执行 git init
✔ 安装成功
warning @tarojs/webpack-runner > dart-sass@1.17.3: use the "sass" package instead
warning @tarojs/webpack-runner > webpack-format-messages > kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
warning stylelint > file-entry-cache > flat-cache > circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
yarn install v1.6.0
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 60.08s.

创建项目 StudentMultiWebClient 成功！
请进入项目目录 StudentMultiWebClient 开始工作吧！😝
```  

### <a name="设置alias别名">设置 alias 别名</a>
```shell
vim config/index.js
```  
```js
const path = require('path')
...
defineConstants: {
  },
alias: {
    '@/src': path.resolve(__dirname, '..', 'src'),
  },
copy: {
    patterns: [
    ],
    options: {
    }
  },
...
```  

### <a name="开启CSSModules">开启 CSS Modules</a>
> RN 端不支持
[传送门](https://nervjs.github.io/taro/docs/css-modules.html)  

### <a name="自定义主题">自定义主题</a>
> RN 端不支持
[传送门](https://nervjs.github.io/taro/docs/css-modules.html)  
```shell
# 安装 Taro UI 主题
npm install taro-ui

# 使用自定义主题生成器生成主题文件 custom-theme.scss：https://nervjs.github.io/taro-ui-theme-preview/

# 引用主题样式
cp custom-theme.scss src
vim custom-theme.scss // 引入 Taro UI 默认样式：@import "~taro-ui/dist/style/index.scss"
vim app.jsx // 引入 Taro UI 主题样式：import './custom-theme.scss'
```  

### <a name="应用框架配置">应用框架配置</a>
[传送门](https://taro-docs.jd.com/taro/docs/tutorial.html)  