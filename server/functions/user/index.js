const { isPlainObject } = require('lodash')
const AliAuthService = require('./services/ali-auth')


/**
 * serverless云函数文档地址: https://help.aliyun.com/document_detail/139203.html
 */

module.exports = async function (ctx) {
  const {
    args: {
      url,
      data = {}
    },
    cloud,
    mpserverless
  } = ctx
  const aliAuth = new AliAuthService(mpserverless, cloud)
  let res = null

  switch (url) {
    case 'ali-auth/get-token':
      res = await aliAuth.getToken(data);
      break;
    case 'ali-auth/get-user-info-from-alipay':
      res = await aliAuth.getUserInfoFromAlipay(data)
      break
    default:
      throw new Error(`缺少对应的action: ${url}`)
  }

  return res
};
