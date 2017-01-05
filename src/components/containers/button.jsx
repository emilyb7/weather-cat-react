import React, { Component } from 'react';

const Button = (props) => {

  const containerStyle = {
    height: '4em',
    marginTop: '1em',
    marginBottom: '1em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0
  }

  const buttonStyle = {
    width: 200,
    height: 40,
    outline: 'none',
    border: 0,
    fontFamily: 'inherit',
    fontSize: '1.2em',
    cursor: 'pointer',
    alignSelf: 'center',
    textDecoration: 'none',
    color: '#000'
  };


  return (
    <div className="container__button"
      style={containerStyle}>
      <button className="btn" id="update-btn" style={buttonStyle} onClick={() => props.reload(props.location)}>Update</button>
    </div>
  )

}

export default Button;
