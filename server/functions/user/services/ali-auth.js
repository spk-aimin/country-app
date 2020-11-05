class AliAuth {
  constructor (mpserverless, cloud) {
    this.mpserverless = mpserverless
    this.cloud = cloud
  }
  /**
   * 获取用户token
   * @param {*} data 
   */
  async getToken (data) {
    // const { mpserverless } = this
    // const result = await mpserverless.db.collection('news').find({
    // })
    // return result
    const res = await this.cloud.base.oauth.getToken({
      // code参数接收自云函数调用处传入的参数
      code: data.authCode
    })
    return res
  }
  /**
   * 添加用户信息
   */
  async insertUser () {
  }
  /**
   * 更新用户信息
   */
  async updateUser () {
  }
  /**
   * 获取支付宝用户信息
   */
  async getUserInfoFromAlipay (data) {
      const res = await this.cloud.util.generic.execute('alipay.user.info.share',{}, {
        authToken: data.token
    });
    return res
  }
}

module.exports = AliAuth