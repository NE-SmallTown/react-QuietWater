/**
 * v0.0.1
 *
 * Copyright (c) 2017
 *
 * Date: 2017/5/18 by Heaven
 */

import { formatUrl } from 'url-lib';

import globalConfig from '../../globalConfig';
import { CALL_API } from '../../middleware/api';

export const Conversation_REQUEST = 'Conversation_REQUEST';
export const Conversation_SUCCESS = 'Conversation_SUCCESS';
export const Conversation_FAILURE = 'Conversation_FAILURE';

const fetchConversation = (queryCondition) => ({
  commentId: queryCondition.commentId,
  [CALL_API]: {
    types: [ Conversation_REQUEST, Conversation_SUCCESS, Conversation_FAILURE ],
    requestUrl: formatUrl(globalConfig.api.conversationUrl, {
      ...queryCondition
    }),
    normalizedPropName: 'conversations'
  }
});

export const loadConversation = queryCondition =>
  dispatch => dispatch(fetchConversation(queryCondition));

