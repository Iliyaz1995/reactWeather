const React = require('react');
var {Link, IndexLink} = require('react-router')

var Nav = (props) => {
  return(
  <div>
    <h1>Nav component</h1>
    <IndexLink to='/' activeClassName='active' activeStyle={{color:'pink'}}>Get Weather</IndexLink>
    <Link to='about' activeClassName='active' activeStyle={{color:'pink'}}>About</Link>
    <Link to='examples' activeClassName='active' activeStyle={{color:'pink'}}>Examples</Link>
  </div>
    )
}

module.exports = Nav;
