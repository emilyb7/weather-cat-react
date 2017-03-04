const makeRequest = (url, cb) => {

  if ('caches' in window) {
    caches.match(url).then(function(response) {
      if (response) {
        response.json().then(function updateFromCache(data) {
          cb(null, JSON.stringify(data));
        });
      }
    });
  }

  let httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        cb(null, httpRequest.responseText);
        return;
      } else if ('caches' in window) {
        caches.match(url).then(function(response) {
          if (response) {
            response.json().then(function updateFromCache(data) {
              cb(null, JSON.stringify(data));
              return;
            });
          } else {
            cb("no matching file in cache");
          }
        });
      } else {
        cb("no cached data at all");
        return;
      }
    } else {
      cb("waiting for response from server...");
    }
  }
  httpRequest.open('GET', url);
  httpRequest.send();
};

export default makeRequest;
