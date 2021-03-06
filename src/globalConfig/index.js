/**
 * v0.0.1
 *
 * Copyright (c) 2017
 *
 * Date: 2017/5/3 by Heaven
 */

import React from 'react';

import merge from 'lodash/merge';

const configParams = {
  languageName: 'zh-cn', // Note that this property value must match the file name in the /src/language directory
  styles: { // 各个部分的皮肤设置,注意要和JSX中的style属性格式一致
    quietWater: {

    },
    replyEditor: {

    },
    loadMoreReplyBtn: {
      backgroundColor: 'rgb(247, 255, 248)'
    },
    replyList: {
      backgroundColor: 'rgba(255, 255, 255, 0.89)'
    },
    reply: {
      lineHeight: 1.9,
      fontSize: '15px',
      color: '#333333'
    },
    comment: {
      fontSize: '15px',
      color: '#333333'
    },
    conversationBox: { // 点击"查看对话"时显示的modal框
      top: '30px',
      fontSize: '15px'
    },
    commentListBox: { // 在未浏览到回复的内容底部时点击"展开评论"时显示的modal框
      fontSize: '15px'
    }
  },
  loading: {
    commentList: {
      // eslint-disable-next-line
      getComponent: () => <img src="data:image/gif;base64,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" />
    }
  },
  responseNormalizeSchema: { // 进行范式化的各个api返回的数据的schema,会与QuietWater本身已经设置好的schema进行合并
    quietWaterOfHost: {}, // 这里根据自己的业务进行设置,但是后端必须按照QuietWater本身已经设置好的schema的格式返回数据
    Comment: {}
  },
  router: {
    user: {
      postfixIsIdOrLoginName: 'id' // 有的网站用户路由的后者是用的id（.../user/123）,有的是用的用户名（.../user/qweksdfs）
      // PREFIXURL: 'http://www.mysite.com/user/'
    }
  },
  events: {
    quietWater: {
      // we will check the document.activeElement's nodeName and attribute,if it matches one of the below
      // array's value,we will don't react the key event.
      responsePrevOrNextReplyExcludeIn: ['input', 'textarea', 'contenteditable'],

      prevReplyPressKey: 'j',
      nextReplyPressKey: 'k'
    }
  },
  paginations: { // default pagination options
    replyList: {
      pageSize: 6
    },
    commentList: {
      pageSize: 10
    }
  },
  api: {
    // PREFIX: 'http://www.easy-mock.com/mock/590c4f0087cce4690fed1f43/qw/api/',
    // P_PREFIX: 'http://www.easy-mock.com/mock/590c4f0087cce4690fed1f43/qw/api/p/', // p represent private

    // quietWaterInitUrl: 'http://www.easy-mock.com/mock/5919acf69aba4141cf23044d/common/rqw', // 初始化QuietWater时需要获取某些数据存储到localstorage里面
    // hostUserLoginUrl: 'https://github.com/login', // 很多操作都需要用户登录后才能操作,这个url是接入QuietWater的网站的用户的登录界面的url
    // quietWaterOfHostUrl: 'articles/info', // 获取QuietWater添加到的那个item的基本信息（如某篇文章,某个歌曲等.包括id,reply列表信息等等）

    post: {
      operationBar: {
        // praiseUrl: 'reply/praise' // the post praise interface url
      }
    },

    share: {
      // twitter: {
        // 可参考https://github.com/overtrue/share.js
        // https://github.com/nygardk/react-share
      // },
      weibo: {
        urlPrefix: 'http://service.weibo.com/share/share.php'
        // sourceWebSiteName: 分享来源于哪个网站,一般填写为接入QuietWater的用户的网站的名称
        // sourceWebSiteName: Represent the name of the source website,e.g.
        // if your website or company's name is walmart,then we should write `sourceWebSiteName: 'walmart'`

        // sourceWebSiteUrl: 分享来源于哪个网站,一般填写为接入QuietWater的用户的网站的url
        // sourceWebSiteUrl: Represent the url of the source website
        // if your website or company's url is 'https://www.mysite.com',then we should write `sourceWebSiteUrl: 'https://www.mysite.com'`

        // if you want to use the share feature,here you need to provide a getComponent function
        // e.g.
        // TODO 已经在社交平台上提了个问题问如何设计锚点交互,如果找到好的想法那么将会应用进来
        /* getComponent ({ replyUrl, sharedText }) { // These properties provided by QuietWater
            // replyUrl: 某个回复的url,带锚点,目前来说我们主要是在PC上使用,且回复列表一般不会太多,所以选择了加锚点的方式,而不是市场上很多其他的交互方式
            // replyUrl: The corresponding reply's url with the anchor,at now we mainly use this repo in PC
            // rather than mobile,that's why we decide to use anchor,but there are many things we need to think,please discuss in the issue
            // sharedText: 一般分享出去都需要填写一段描述性的话,然后这段话会在发布的分享中显示(一般为标题)
            // sharedText: Usually we need write a text to describe the share(normally this is the title of the share)

            const generatedUrl = ...

            return (
              <div>
                <icon iconName="icon-weibo" />
                <a href={generatedUrl} target="_blank" />
              </div>
            );
        } */
      }
    },
    responseStatusHandler: {
      // template is: statusCode: () => {}
      // e.g. ok: () => {...}
    },
    httpStatusExcptionHandler: {
      // template is: statusCode: () => {}
      // e.g. 403: () => {...}
    },
    responseErrorHandler: {
      // template is: errorCode: () => {}
      // e.g. 100023: () => {...}
    }
  },
  localStorage: {
    info2Storage: {
      userName: 'u_userName',
      loginName: 'u_loginName',
      avatarUrl: 'u_avatarUrl',
      userId: 'u_id',
      roleName: 'u_roleName',
      userToken: 'u_tk'
    }
  },
  sessionStorage: {
    keyOfCurrentReplyItemHash: 'qw_curReply'
  }
};

export default configParams;

export const configQuietWater = options => merge(configParams, options);
