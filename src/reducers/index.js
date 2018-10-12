const initialState = {
  events: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_EVENTS":
      return {
        events: action.payload.events.Events.Event
      }

    default:
     return state
  }
}

export default reducer
