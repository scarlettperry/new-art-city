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

    case "LOAD_USER_EVENTS":
      return {
        ...state,
        userEvents: [...state.userEvents, ...action.payload.eventsArray]
      }

    case "SET_FILTERED_LOCATIONS":
      return {
        ...state,
        filteredLocations: action.payload.eventsArray
      }

    case "SELECTED_EVENT":
    console.log(action.payload.eventObj)
    console.log([...state.userEvents, action.payload.eventObj].flat())
      return {
        ...state,
        userEvents: [...state.userEvents, action.payload.eventObj].flat()
      }

    default:
     return state
  }
}

export default reducer
