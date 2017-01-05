const formatTemp = n => ((Math.round(n * 10)) / 10) + "°c";

const formatCity = str => {
  if (!str || str === '') return '';
  return str[0].toUpperCase() === str[0] ? str : capitalise(str);
};

const formatType = str => {
  if (!str || str === '') return '';
  return str[0].toUpperCase() === str[0] ? str : capitalise(str);
};

const capitalise = str => str.split('')
    .map((char, i) => i === 0 ? char.toUpperCase() : char)
      .join('');

const rgbColor = arr => `RGBA(${arr[0]},${arr[1]},${arr[2]},1)`;

module.exports = {
  formatTemp: formatTemp,
  formatCity: formatCity,
  formatType: formatType,
  rgbColor: rgbColor
};
