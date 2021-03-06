/**
 * v0.0.1
 *
 * Copyright (c) 2017
 *
 * Date: 2017/5/1 by Heaven
 */

const languageObj = {
  QuietWater: {
    headerTitle: {
      countTextPostfix: '个回复'
    },
    loadMoreReplyText: '更多'
  },
  User: {

  },
  Reply: {
    settings: {
      settingsText: '设置',
      // allowAllUsersComment: '允许所有用户评论'
      closeComment: '关闭评论',
      deleteText: '删除'
    },
    shareText: '分享',
    commentBtnPostfix: '条评论',
    expandText: '阅读更多',
    foldText: '收起',
    lastUpdatedTimeText: '更新于',
    foldCommentText: '收起评论'
  },
  Comment: {
    headerTitle: {
      isAuthorText: '作者',
      countTextPostfix: '个评论',
      replyToText: '回复给'
    },
    operationBar: {
      replyText: '回复',
      conversationText: '查看对话'
    },
    ConversationBox: {
      titleText: '查看对话'
    }
  },
  Editor: {
    replyEditor: {
      placeholderText: '写回复...',
      submitText: '提交'
    },
    commentEditor: {
      cancelText: '取消',
      submitText: '评论',
      placeholderText: '写下你的评论...'
    }
  },
  OperationError: {
    backendInterfaceIncludesError: '操作失败,请联系管理员',
    whenNotLogin: '未登录情况下不能进行此操作哦~',
    whenAddReplyError: '创建回复失败,请检查网络,如若仍不能解决,请联系管理员',
    whenAddCommentError: '创建评论失败,请检查网络,如若仍不能解决,请联系管理员'
  },
  languageName: 'zh-cn'
};

export default languageObj;
