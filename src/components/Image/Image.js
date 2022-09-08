import React, { Component } from 'react';
import './Image.css';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    return (
      <div className={`${this.props.img}`}>

      </div>
    )
  }
}

Image.propTypes = {
  img: PropTypes.string,
}