import React, { Component } from 'react'
import UserExhibitionGrid from './UserExhibitionGrid'
import RecentActivityGrid from './RecentActivityGrid'
import Calendar from './Calendar'



class UserProfile extends Component {

  render(){
    return (
      <div>
        <UserExhibitionGrid />
        <Calendar />
        <RecentActivityGrid />
      </div>
    )
  }
}

export default UserProfile
