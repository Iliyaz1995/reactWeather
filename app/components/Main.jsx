const React = require('react');
const Nav = require('Nav');

var Main = (props) => {
  return(
    <div>
     <Nav></Nav>
     <h1>hello i am main component</h1>
     {props.children}
    </div>
  )
}

module.exports = Main;
