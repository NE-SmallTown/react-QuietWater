/**
 * v0.0.1
 *
 * Copyright (c) 2017
 *
 * Date: 2017/1/15 by Heaven
 */

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class SvgIcon extends React.PureComponent {
  static propTypes = {
    iconName: PropTypes.string,
    className: PropTypes.string
  }

  render () {
    const { iconName, className, ...restProps } = this.props;

    return (
      <svg styleName="icon" className={className} {...restProps}>
        <use xlinkHref={`#${iconName}`} />
      </svg>
    );
  }
};
