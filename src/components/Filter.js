import React, { Component } from 'react'

class Filter extends Component {

  render(){
    return (
      <div className="filter-container">
        <span>2D Media
        <select onChange={this.props.handleFilter} name="2D Media" id="type">
          <option value="">All</option>
          <option value="Painting">Painting</option>
          <option value="Calligraphy">Calligraphy</option>
          <option value="Illustration">Illustration</option>
          <option value="Drawing">Drawing</option>
          <option value="Graphics">Graphics</option>
          <option value="Photography">Photography</option>
        </select></span>

        <span> 3D Media
        <select onChange={this.props.handleFilter} name="3D Media" id="type">
          <option value="">All</option>
          <option value="Architecture">Architecture</option>
          <option value=" Sculpture"> Sculpture</option>
          <option value="Crafts">Crafts</option>
          <option value="Fashion">Fashion</option>
          <option value="Furniture">Furniture</option>
          <option value="Installation">Installation</option>
          <option value="Product">Product</option>
          <option value="Ceramics">Ceramics</option>
        </select></span><br/><br/>

        <span> Screen Media
        <select onChange={this.props.handleFilter} name="Screen Media" id="type">
          <option value="">All</option>
          <option value="Film">Film</option>
          <option value="Digital">Digital</option>
          <option value="Video Installation">Video Installation</option>
        </select></span>

        <span> Other Media
        <select onChange={this.props.handleFilter} name="Other Media" id="type">
          <option value="">All</option>
          <option value="Performance Art">Performance Art</option>
        </select></span><br/><br/>
      </div>
    )
  }
}

export default Filter
