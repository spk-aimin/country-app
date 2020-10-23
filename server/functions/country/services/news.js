class News {
  constructor (mpserverless) {
    this.mpserverless = mpserverless
  }
  async queryList () {
    const { mpserverless } = this
    const result = await mpserverless.db.collection('news').find({
    })
    return result
  }
}

module.exports = News