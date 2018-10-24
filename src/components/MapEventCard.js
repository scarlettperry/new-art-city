import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, Icon } from 'semantic-ui-react'
import moment from 'moment'

import { postUserEvents } from '../actions/railsAPI'


class MapEventCard extends Component {

  state = {
    toggled: false,
    activeIndex: 0
  }

  handleToggle = () => {
    this.setState((prevState)=>{
      return {toggled: !prevState.toggled}
    })
    this.props.postUserEvents(this.props.event)
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render(){

    const { activeIndex } = this.state

    return(
      <div className="ui items">
        <div className='item'>
          <div className='image'>
            <img src={this.props.event.Image[2]["_attributes"]["src"]} alt="event"
            />
          </div>
          <div className='content'>
            <button onClick={this.handleToggle} className='ui small icon button' role='button'>
              <i aria-hidden='true' className='red heart icon' />
              {!this.state.toggled? <span> Save</span> : <span> Unsave</span> }
            </button><br/><br/>
            <div className='meta'>
              {this.props.event.DateEnd["_text"] === "0000-00-00" ? "Ongoing" : `Through ${moment(this.props.event.DateEnd["_text"]).format("MMM D, YYYY")}`} @ {this.props.event.Venue.Name["_text"]}
            </div>
            <div className='description'><strong>{this.props.event.Name["_text"]}</strong>
          </div>
            <Accordion>
              <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Venue details
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  <strong>Address:</strong> {this.props.event.Venue.Address["_text"]}<br/>
                  <strong>Hours:</strong> {moment(this.props.event.Venue.OpeningHour["_text"],'HH:mm:ss' ).format('h:mm A')} - {moment(this.props.event.Venue.ClosingHour["_text"], 'HH:mm:ss').format('h:mm A')}<br/>
                  <strong>Phone Number:</strong> {this.props.event.Venue.Phone["_text"]}
                </p>
              </Accordion.Content>
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { postUserEvents })(MapEventCard)
