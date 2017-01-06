import React, { Component } from 'react';

const ContainerTitle = () => {
  const title = 'The weather today';
  const titleStyle = {
    marginTop: '3%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
    //height: '10%'
  };

  return (
    <div className="container-title" style={titleStyle}>
      <h1 className="titleish">{title}</h1>
    </div>
  );
}

export default ContainerTitle;
