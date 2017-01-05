import React from 'react';
import Container from './components/container.jsx';
import makeRequest from './makeRequest.js';
import fade from './fade.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location: '', weather: {}};
    this.getDetails();
  }
  getDetails() {
    makeRequest('/land', (err, response) => {
      if (err) console.log(err);
      const xhrResponse = JSON.parse(response);
      this.setState({
        location: xhrResponse.location,
        weather: xhrResponse.weather,
        gif: xhrResponse.gif
      });
      Container();
      let backgroundColors = `linear-gradient(${xhrResponse.colors.topColor},${xhrResponse.colors.bottomoColor})`;
      document.querySelector('#app').style.background = backgroundColors;
    })
  }

  render() {
    return (
      <Container
        details={{
          location: this.state.location,
          weather:this.state.weather,
          gif: this.state.gif,
        }}

        reload={(location) => {
          const container = document.querySelector('.main-container');
          document.querySelector('img').src = '';
          fade.fadeOut(container);
          makeRequest(`/update?lon=${location.lon}&lat=${location.lat}`, (err, response) => {
            if (err) console.log(err);
            const xhrResponse = JSON.parse(response);
            this.setState({
              location: location,
              weather: xhrResponse.weather,
              gif: xhrResponse.gif
            });
            //fade.fadeIn(container);
          })
        }}
      />
    );
  }

    componentWillUpdate() {
      const container = document.querySelector('.main-container');
      let url = document.querySelector('img').src;
      let timer = window.setInterval((url) => {
        if (url !== document.querySelector('img').src) {
          fade.fadeIn(container);
          clearInterval(timer);
        }
      }, 10);
    }
}

export default App;
