/**
 * v0.0.1
 *
 * Copyright (c) 2017
 *
 * Date: 2017/3/26 by Heaven
 */

import Message from '../components/Message';

import globalConfig from '../globalConfig';
import networkHelper from './networkHelper';
import { getToken } from '../security/authService';

// 处理接口本身返回的status字段
const responseStatusHandler = globalConfig.api.responseStatusHandler;

// 处理http响应的状态码的异常
const httpStatusExcptionHandler = globalConfig.api.httpStatusExcptionHandler;

// 处理接口返回的数据中含有error字段的情况
const responseErrorHandler = globalConfig.api.responseErrorHandler;

let backendInterfaceIncludesErrorText;
require([`../language/${globalConfig.languageName}`], languageObj => {
  backendInterfaceIncludesErrorText = languageObj.default.OperationError.backendInterfaceIncludesError;
});

// 普通接口
export const network = networkHelper({
  urlPrefix: () => globalConfig.api.PREFIX,
  unwrapResponse: 'data',
  responseErrorKeys: ['error'],
  responseErrorHandler: ({ error: { code: errorCode } }) => {
    console.log(`fetch normal api return a object which includes some error information: ${errorCode}`);

    if (responseErrorHandler[errorCode]) {
      responseErrorHandler[errorCode]();
    } else {
      console.warn(`but don't find the corresponding error code handler function`);
    }

    Message.error(backendInterfaceIncludesErrorText, 2);
  },
  responseStatusHandler: status => responseStatusHandler[status] && responseStatusHandler[status](),
  httpStatusExcptionHandler: status => httpStatusExcptionHandler[status] && httpStatusExcptionHandler[status]()
});

// 私有接口
export const priNetwork = networkHelper({
  urlPrefix: () => globalConfig.api.P_PREFIX,
  defaultHeaders: {
    Authorization: () => `Bearer ${getToken()}`
  },
  unwrapResponse: 'data',
  responseErrorKeys: ['error'],
  responseErrorHandler: ({ error: { code: errorCode } }) => {
    console.log(`fetch private api return a object which includes some error information: ${errorCode}`);

    if (responseErrorHandler[errorCode]) {
      responseErrorHandler[errorCode]();
    } else {
      console.warn(`but don't find the corresponding error code handler function`);
    }

    Message.error(backendInterfaceIncludesErrorText, 2);
  },
  responseStatusHandler: dataStatus => responseStatusHandler[dataStatus] && responseStatusHandler[dataStatus](),
  httpStatusExcptionHandler: status => httpStatusExcptionHandler[status] && httpStatusExcptionHandler[status]()
});
