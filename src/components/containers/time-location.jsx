import React, { Component } from 'react';
import Location from '../location.jsx';
import Time from '../time.jsx';

const TimeLocation = (props) => {

  const timeLocationStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-around",
    height: '5%',
    marginTop: '1%'
  };

  return (
    <div className="container__time-location" style={timeLocationStyle}>
      <Location location={props.location}/>
      <Time />

    </div>
  )
}

export default TimeLocation;
