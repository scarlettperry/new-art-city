import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import  filterOptions  from '../data/filterOptions'
// let stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }]

const Filter = () => (
  <Dropdown placeholder='Media' fluid multiple search selection options={filterOptions} onChange={(event)=> console.log(event.target.innerText)}/>
)

export default Filter
