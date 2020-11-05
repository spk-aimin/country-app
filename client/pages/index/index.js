import { invokeFunction } from '../../utils/serverless'

Page({
  data: {
    banner: {
      background: ['blue', 'red', 'yellow'],
      indicatorDots: true,
      autoplay: true,
      vertical: false,
      interval: 3000,
      circular: false,
    },
    newsList: []
  },
  linkToUser(event) {
    let {id} = event.target.dataset
    my.navigateTo({url: `/pages/news/detail/detail?id=${id}`})
  },
  async onLoad(query) {
    let newsList = await invokeFunction({
      name: 'country',
      url: 'news/list'
    })
    this.setData({
      newsList
    })
  },
  getUserInfo() {
     my.getAuthCode({ // 用户授权
      scopes: ['auth_user'],
      success: async (res) => {
        const auth = await invokeFunction({
          name: 'user',
          url: 'ali-auth/get-token',
          data: {
            authCode: res.authCode
          }
        })
        console.log(auth)
        const info = await invokeFunction({
          name: 'user',
          url: 'ali-auth/get-user-info-from-alipay',
          data: {
            authCode: auth.accessToken
          }
        })
        console.log(info)
      }
    })
    my.getOpenUserInfo({
      fail: (res) => {
      },
      success: (res) => {
        console.log(res)
      }
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
