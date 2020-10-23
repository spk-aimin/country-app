class Order {
  constructor(mpserverless) {
    this.mpserverless = mpserverless
  }

  async query() {
    const { mpserverless } = this

    // 获取当前请求的用户信息
    const userInfo = await mpserverless.user.getInfo()

    const result = await mpserverless.db.collection('orders').find({
      orderId: data.orderId,
      authUserId: userInfo.user.oAuthUserId
    });

    return result
  }

  create() {

  }
}

module.exports = Order