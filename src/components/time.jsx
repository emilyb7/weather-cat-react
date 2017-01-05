import React, { Component } from 'react';

const Time = (props) => {

  const formatTime = arr => {
    let h = arr[0];
    let m = arr[1];
    let h12hour = h === 0 ? '12' : (h > 12 ? (h - 12) : h).toString();
    let ampm = h < 12 ? 'AM' : 'PM';
    let mFormatted = m.toString().length === 2 ? m : '0' + m;
    return h12hour + ":" + mFormatted + ' ' + ampm;
  }

  let date = [new Date().getHours(), new Date().getMinutes()];
  let currentTime = formatTime(date);

  return (
    <div className="time-location__time time-location__inner">
      <p className="details__time">
        <i className="fa fa-clock-o" aria-hidden="true"></i>
        <strong>&nbsp;Last updated:</strong>
        <br />
        &nbsp;&nbsp;
        <span id="time">&nbsp;{currentTime}</span>
      </p>
    </div>
  )
};

export default Time;
