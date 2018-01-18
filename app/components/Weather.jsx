const React = require('react');
const WeatherForm = require('WeatherForm')
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({isLoading:true});

   openWeatherMap.getTemp(location).then(function(temp){
       that.setState({
         location:location,
         temp: temp,
         isLoading:false
       })
   },function(err) {
     that.setState({
       isLoading:false
     })
          alert(err)
   })
  },
  render: function getWeather(){
    var {isLoading, location, temp} = this.state;

    function weatherRendering() {
      if (isLoading) {
        return <h3>Geting Weather....</h3>
      }else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}></WeatherMessage>
        };
      }

    return(
    <div>
      <h3>Weather component</h3>
      <WeatherForm onSearch={this.handleSearch}></WeatherForm>
      {weatherRendering()}
    </div>
    )
  }
})

module.exports = Weather;
