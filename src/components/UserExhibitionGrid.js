import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserExhibitionGrid extends Component {

  render(){
    console.log(this.props);
    return (
      <div>
        Hello from UserExhibitionGrid
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userEvents: state.userEvents
  }
}

export default connect(mapStateToProps)(UserExhibitionGrid)
