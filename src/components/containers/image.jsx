import React, { Component} from 'react';

const Image = (props) => {
  const imgSrc = props.gif;

  const containerStyle = {
    height: '20em',
    display: 'flex',
    alignItems: 'center'
  }

  const imgStyle = {
    margin: 'auto',
    maxWidth: '90%',
    maxHeight: '95%',
    alignSelf: 'center',
    cursor: 'pointer'
  }

  const overlayStyle = {
    position: 'absolute',
    right: 0,
    width: '100%',
  }

  const overlayTextStyle = {
    alignSelf: 'center',
    fontSize: '2em',
    display: 'none',
    zIndex: 200,
    textDecoration: 'underline'
  };

  return (
    <div className="container__image" style={containerStyle}>
      <img
        className="gif text_control"
        style={imgStyle}
        src={imgSrc}
        alt="the weather cat" />
    </div>
  )
}

export default Image;
