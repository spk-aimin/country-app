import MPServerless from "@alicloud/mpserverless-sdk";
import serverlessConfig from "./serverless.config";
import { memoize } from "lodash-es";

async function authorize() {
  const res = await my.serverless.user.authorize({
    authProvider: "alipay_openapi"
  });

  if (res.success) {
    return true;
  }

  return Promise.reject(new Error("用户信息获取失败"));
}

/**
 * 获取用户信息
 * @example
 * getUserInfo()
 */
const authorizeCache = memoize(authorize);

/**
 * @example
 * await invokeFunction({
 *   name: "main",
 *   url: "signup/query",
 *   // 可为空
 *   data: {}
 * });
 */
export async function invokeFunction(options) {
  await authorizeCache();
  const { name, url, data } = options;
  console.log(`function.invoke ${url} request:`, data);
  const res = await my.serverless.function.invoke(name, {
    url,
    data
  });
  if (res.success) {
    console.log(`function.invoke ${url} response:`, res.result);
    return res.result;
  }
  console.log(`function.invoke ${url} error:`, res);
  return Promise.reject(res);
}

export function serverlessInit() {
  my.serverless = new MPServerless(
    {
      uploadFile: my.uploadFile,
      request: my.request,
      getAuthCode: my.getAuthCode,
      getFileInfo: my.getFileInfo,
      getImageInfo: my.getImageInfo
    },
    serverlessConfig
  );
}