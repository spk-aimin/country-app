const { isPlainObject } = require('lodash')
const OrderService = require('./services/order')


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
  const order = new OrderService(mpserverless)
  let res = null

  switch (url) {
    case 'order/query':
      res = await order.query(data);
      break;
    case 'order/create':
      res = await order.create(data);
      break;
    default:
      throw new Error(`缺少对应的action: ${url}`)
  }

  return res
};
