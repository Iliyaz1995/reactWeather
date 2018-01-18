const React = require('react');

var WeatherMessage = (props) => {
  var {location, temp} = props
  return(
    <h3>location is {location} and temperature is {temp}</h3>
  )
}

module.exports = WeatherMessage;


// http://api.openweathermap.org/data/2.5/weather?q=nellore&units=metric&appid=2cdd7acdb0318204dd991b7ded5f0bd1
