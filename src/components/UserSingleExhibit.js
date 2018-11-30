import React, { Component } from 'react'
//modal
import Popup from "reactjs-popup";
import { Accordion, Icon } from 'semantic-ui-react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteUserEvent } from '../actions/railsAPI'

class UserSingleExhibit extends Component {

  state = {
    activeIndex: 0
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render(){

    const { activeIndex } = this.state

    return (
      <div className="column pointer">
        <Popup
          trigger={
            <div className="container">
              <img className="image"
                src={this.props.event["img_url"]}
                height="170"
                width="170"
                alt="event"/>
                  <div className="middle">
                    <div className="text">
                     View
                   </div>
                </div>
          </div>}
          modal
          closeOnDocumentClick
        >
          <div className="exhibit-details">
            <img src={this.props.event["img_url"]} height="200" width="200"alt="event"/>
            <p className="event-title">{this.props.event["exhibition_name"]}</p>
            <p className="event-venue">
                {this.props.event["date_end"] === "0000-00-00" ? "Ongoing" : `Through ${moment(this.props.event["date_end"]).format("MMM D, YYYY")}`} @ {this.props.event["venue_name"]}
            </p>
            <Accordion>
              <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Description
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1} className="event-description">
                <p>
                  {this.props.event["exhibition_description"]}
                </p>
              </Accordion.Content>

              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Venue details
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  <strong>Address:</strong> {this.props.event["address"]}<br/>
                  <strong>Hours:</strong> {moment(this.props.event["opening_hour"],'HH:mm:ss' ).format('h:mm A')} - {moment(this.props.event["closing_hour"], 'HH:mm:ss').format('h:mm A')}<br/>
                  <strong>Phone Number:</strong> {this.props.event["phone_number"]}
                </p>
              </Accordion.Content>
            </Accordion>
            </div>
      </Popup><br/>
      <button onClick={()=>this.props.deleteUserEvent(this.props.event)} className='ui icon button' role='button'>
        <i aria-hidden='true' className='red heart icon' />
        <span> Unsave</span>
      </button>
    </div>
    )
  }
}

export default connect(null, { deleteUserEvent })(UserSingleExhibit)
