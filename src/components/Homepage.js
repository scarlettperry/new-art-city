import React, { Component } from 'react'
import ExhibitionGrid from './ExhibitionGrid'
import Filter from './Filter'

class Homepage extends Component {
  render(){
    return (
      <div>
        <Filter />
        <ExhibitionGrid />
      </div>
    )
  }
}

export default Homepage
