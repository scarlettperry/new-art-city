import React, { Component } from 'react'
import UserExhibitionGrid from './UserExhibitionGrid'
import Calendar from './Calendar'



class UserProfile extends Component {

  render(){
    return (
      <div className="wrapper">
        <UserExhibitionGrid />
        <Calendar/>
      </div>
    )
  }
}

export default UserProfile
