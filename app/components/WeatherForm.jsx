const React = require('react');

var WeatherForm  = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    // alert('submit works')
    WeatherInput = this.refs.WeatherInput.value;
    if (WeatherInput.length > 0) {
      this.refs.WeatherInput.value='';
      this.props.onSearch(WeatherInput);
      }

  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type='text' ref='WeatherInput'/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
