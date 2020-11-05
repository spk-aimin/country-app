import { invokeFunction } from '/utils/serverless'
import parse from 'mini-html-parser2'
Page({
  data: {
    article: {} // 文章信息
  },
  // 页面加载
  async onLoad(query) {
    // 文章查询
    const res = await invokeFunction({
      name: 'country',
      url: 'news/detail',
      data: {_id: query.id}
    })
    const data = res[0]
    parse(data.content, (err, nodes) => {
      if (!err) {
        data.nodes = nodes
        this.setData({
          article: data
        })
      }
    })
  }
})