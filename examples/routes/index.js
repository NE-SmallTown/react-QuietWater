/**
 * v0.0.1
 *
 * Copyright (c) 2017
 *
 * Date: 2017/5/1 by Heaven
 */

import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App';

// TODO 发布时删除routes,以及将此移动到examples目录
export default (
  <Route path="/" component={App} />
);