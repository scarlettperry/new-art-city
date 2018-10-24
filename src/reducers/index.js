const initialState = {
  events: [],
  filteredLocations : [],
  userEvents: [],
  datesRange: ""
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
      return {
        ...state,
        userEvents: [...state.userEvents, action.payload.eventObj].flat()
      }

      case "SET_DATES_RANGE":
      // console.log(action.payload.datesObj)
        return {
          ...state,
          datesRange: action.payload.datesObj
        }

    default:
     return state
  }
}

export default reducer
