import React from 'react';
import Container from './components/container.jsx';
import makeRequest from './makeRequest.js';
import fade from './fade.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: null, weather: {}, };
    this.getDetails();
  }

  getDetails () {
    makeRequest('https://freegeoip.net/json/', (err, response) => {
      if (err) {
        if ('caches' in window) {
          caches.match("/land").then(function(response) {
            if (response) {
              response.json().then(function updateFromCache(data) {
                this.setState({
                  location: location,
                  weather: serverResponse.weather,
                  gif: serverResponse.gif,
                });
                const backgroundColors = `linear-gradient(${data.colors.topColor},${data.colors.bottomoColor})`;
                document.querySelector('#app').style.background = backgroundColors;
              });
            }
          });
        }
        Container();

        return;
      } else {
        const xhrResponse = JSON.parse(response);
        const location = {
          city: xhrResponse.city,
          lat: xhrResponse.latitude,
          lon: xhrResponse.longitude,
        };

        const url = `/land?city=${location.city}&lat=${location.lat}&lon=${location.lon}`;

        makeRequest(url, (err, response) => {
          let serverResponse;
          if (err) {
            console.log(err, "unable to fetch details for your location");
            return;
          } else {
            serverResponse = JSON.parse(response);
            this.setState({
              location: location,
              weather: serverResponse.weather,
              gif: serverResponse.gif,
            });
          }

          Container();

          const backgroundColors = `linear-gradient(${serverResponse.colors.topColor},${serverResponse.colors.bottomoColor})`;
          document.querySelector('#app').style.background = backgroundColors;
        });
      }
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
              gif: xhrResponse.gif,
            });
          })
        }}
        />
    );
  }

  componentWillUpdate() {
    if (document.querySelector('img')) {
      const container = document.querySelector('.main-container');
      let url = document.querySelector('img').src || '';
      let timer = window.setInterval((url) => {
        if (url !== document.querySelector('img').src) {
          fade.fadeIn(container);
          clearInterval(timer);
        }
      }, 10);
    }
  }
}

export default App;
