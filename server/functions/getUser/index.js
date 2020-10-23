
/**
 * serverless云函数文档地址: https://help.aliyun.com/document_detail/139203.html
 */

module.exports = async function (ctx) {
  const { args, mpserverless } = ctx

  const result =  await mpserverless.db.collection('user').find({
    name: args.data.name
  });

  return result
};
