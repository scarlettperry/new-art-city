import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postUserEvents } from '../actions/railsAPI'
import { Accordion, Icon } from 'semantic-ui-react'
import moment from 'moment'
//modal
import Popup from "reactjs-popup";

class SingleExhibit extends Component {

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

  exhibitDetails = () => {
    const { activeIndex } = this.state

    if (this.props.event) {
      if (!this.props.event.Image[2]["_attributes"]["src"].includes("nopic")) {
        return (
          <div className="column pointer">
            <Popup
              trigger={
                <div className="container">
                  <img className="image" src={this.props.event.Image[2]["_attributes"]["src"].slice(0,-4)} height="170" width="170"alt="event"/>
                  <div className="middle">
                    <div className="text">
                      View || Save
                    </div>
                  </div>
                </div>}
              modal
              closeOnDocumentClick
              >
                <div className="exhibit-details">
                  <br/>
                  <button onClick={this.handleToggle} className='ui icon button' role='button'>
                    <i aria-hidden='true' className='red heart icon' />
                    {!this.state.toggled? <span> Save</span> : <span> Unsave</span> }
                  </button><br/><br/>
                  <img src={this.props.event.Image[2]["_attributes"]["src"].slice(0,-4)} height="200" width="200"alt="event"/>
                  <p className="event-title">{this.props.event.Name["_text"]}</p>
                  <p className="event-venue">
                      {this.props.event.DateEnd["_text"] === "0000-00-00" ? "Ongoing" : `Through ${moment(this.props.event.DateEnd["_text"]).format("MMM D, YYYY")}`} @ {this.props.event.Venue.Name["_text"]}
                  </p>
                  <Accordion>
                          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Description
                          </Accordion.Title>
                          <Accordion.Content active={activeIndex === 1} className="event-description">
                            <p>
                              {this.props.event.Description["_cdata"]}
                            </p>
                          </Accordion.Content>

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
              </Popup>
            </div>
          )
      }
    }
  }

  render(){
    return (
      <div className="child">
        {this.exhibitDetails()}
      </div>
    )
  }
}

export default connect(null, { postUserEvents })(SingleExhibit)
