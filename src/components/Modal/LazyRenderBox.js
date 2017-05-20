/**
 * v0.0.1
 *
 * Copyright (c) 2016 Heaven
 *
 * Date: 2017/3/19
 */

import React, { PropTypes } from 'react';

export default class LazyRenderBox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    hiddenClassName: PropTypes.string,
    visible: PropTypes.bool
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  }

  render () {
    let className = this.props.className;
    if (this.props.hiddenClassName && !this.props.visible) {
      className += ` ${this.props.hiddenClassName}`;
    }

    const props = { ...this.props, className };
    delete props.hiddenClassName;
    delete props.visible;

    return <div {...props} />;
  }
}
