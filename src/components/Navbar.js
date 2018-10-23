import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class Navbar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return (
      <div className="ui compact menu">
        <Segment borderless>
          <Menu pointing secondary size="large" borderless>
            <NavLink to="/">
              <Menu.Item
                name='Exhibitions'
                fitted
                active={activeItem === 'Exhibitions'}
                onClick={this.handleItemClick} />
            </NavLink>
            <NavLink to="/profile">
              <Menu.Item
                name='Plan Your Visit'
                fitted
                active={activeItem === 'Plan Your Visit'}
                onClick={this.handleItemClick}
              />
            </NavLink>
          </Menu>
        </Segment>
      </div>
    )
  }
}

export default Navbar
