import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import  filterOptions  from '../data/filterOptions'
// let stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }]

const Filter = (props) => (
  <Dropdown placeholder='Media' fluid multiple search selection
    options={filterOptions}
    onChange={props.handleChange}
  />
)

export default Filter
