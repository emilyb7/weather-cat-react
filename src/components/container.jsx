import React, { Component } from 'react';
import ContainerTitle from './containers/title.jsx';
import TimeLocation from './containers/time-location.jsx';
import Image from './containers/image.jsx';
import WeatherDetails from './containers/weather-details.jsx';
import Button from './containers/button.jsx';

const Container = props => {

  const containerStyle = {
    width: '90vw',
    maxWidth: 650,
    height: '100%',
    minHeight: '100vh',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'RGBA(200, 200, 200, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    boxShadow: '0 0 10px #333',
    opacity: 0,
    zIndex: 0
  }
  if (props) {
    return (
      <div className="main-container" style={containerStyle}>
        <ContainerTitle />
        <TimeLocation location={props.details.location}/>
        <Image gif={props.details.gif}/>
        <WeatherDetails weather={props.details.weather}/>
        <Button location={props.details.location} reload={props.reload}/>
      </div>
    );
  }
}

export default Container;
