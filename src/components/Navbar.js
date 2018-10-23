import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  render(){
    return (
      <div>
        <NavLink to="/"><span> Home </span></NavLink>
        <NavLink to="/profile"><span> Profile </span></NavLink>
      </div>
    )
  }
}

export default Navbar
//use withRouter maybe
