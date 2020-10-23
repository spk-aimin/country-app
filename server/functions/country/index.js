const { isPlainObject } = require('lodash')
const NewsService = require('./services/news')


/**
 * serverless云函数文档地址: https://help.aliyun.com/document_detail/139203.html
 */

module.exports = async function (ctx) {
  const {
    args: {
      url,
      data = {}
    },
    mpserverless
  } = ctx
  const order = new NewsService(mpserverless)
  let res = null

  switch (url) {
    case 'news/list':
      res = await order.queryList(data);
      break;
    default:
      throw new Error(`缺少对应的action: ${url}`)
  }

  return res
};
