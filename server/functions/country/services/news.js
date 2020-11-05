class News {
  constructor (mpserverless) {
    this.mpserverless = mpserverless
  }
  async queryList (data) {
    const { mpserverless } = this
    const result = await mpserverless.db.collection('news').find({
    })
    return result
  }
  async queryDetail (data) {
    const { mpserverless } = this
    const result = await mpserverless.db.collection('news').find({
      _id: data._id
    })
    return result
  }
}

module.exports = News