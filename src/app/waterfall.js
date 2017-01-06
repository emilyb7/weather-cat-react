const ipRequest = require('./request-ip.js');
const getWeather = require('./getWeather.js');
const getGiphy = require('./getGiphy.js');
const backgroundColors = require('./backgoundColors.js');

const waterfall = (args, tasks, cb) => {
  let next = tasks[0]
  let tail = tasks.slice(1)
  if (typeof next !== 'undefined') {
    next(args, function(error, result) {
      if (error) {
        cb (error)
        return ;
      }
      waterfall(result, tail, cb)
    })
    return;
  }
  return cb(null, args)
};

const land = (location, cb) => {
  waterfall(location, [getWeather, getGiphy, backgroundColors], (err, result) => {
    if (err) console.log(err);
    else cb(null, result);
  });
}

const update = (location, cb) => {
  waterfall(location, [getWeather, getGiphy, backgroundColors], (err, result) => {
    if (err) console.log(err);
    else cb(null, result);
  });
}

module.exports = {land: land, update: update};
