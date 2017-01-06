import React, { Component } from 'react';

const WeatherDetails = (props) => {

  const weather = props.weather;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '15%'
  };

  return (
    <div className="container_details" style={containerStyle}>
      <p className="details__temp" style={{fontSize: '2em', margin:0}}>
        <i className="fa fa-thermometer-half" aria-hidden="true"></i>
        &nbsp;
        <span id="temp" className="titleish">{weather.temp}</span>
      </p>
      <br />
      <p id="type" style={{margin: 0}}>{weather.type}</p>
    </div>
  )
}

export default WeatherDetails;
