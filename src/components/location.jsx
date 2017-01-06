import React, { Component } from 'react';

const Location = (props) => {

  let cityName = '';

  if (props.location) cityName = props.location.city;

  return (
    <div className="time-location__location time-location__inner">
      <p className="detailsLocation">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <strong>&nbsp;Location:</strong>
        <br />
        &nbsp;&nbsp;
        <span id="city">{cityName}</span>
      </p>
    </div>
  )
}

export default Location;
