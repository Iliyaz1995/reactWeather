const axios = require('axios');


module.exports = {
  getTemp : function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&units=metric&appid=2cdd7acdb0318204dd991b7ded5f0bd1`;

    return axios.get(requestURL).then(function(res) {
         if (res.data.cod && res.data.message) {
           throw new Error(res.data.message)
         }else {
           return res.data.main.temp;
         }
    },function(res) {
       throw new Error('City Not Found')
    });
  }
}
