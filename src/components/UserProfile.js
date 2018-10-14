import React, { Component } from 'react'
import UserExhibitionGrid from './UserExhibitionGrid'
import RecentActivityGrid from './RecentActivityGrid'



class UserProfile extends Component {

  render(){
    return (
      <div>
        <UserExhibitionGrid />
        <RecentActivityGrid />
      </div>
    )
  }
}

export default UserProfile
