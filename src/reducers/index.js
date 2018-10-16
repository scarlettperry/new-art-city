const initialState = {
  events: [],
  filteredLocations : [],
  userEvents: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_EVENTS":
      return {
        ...state,
        events: action.payload.events.Events.Event
      }

    case "SET_FILTERED_LOCATIONS":
      return {
        ...state,
        filteredLocations: action.payload.eventsArray
      }

    // case "SELECTED_EVENT":
    //   return {
    //     ...state,
    //     SELECTED_EVENT: action.payload.eventOj
    //   }

    default:
     return state
  }
}

export default reducer
