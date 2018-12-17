//GET fetch
export const loadUserEvents = () => {
  // console.log("yay im getting user events!")
  return (dispatch) => {
    fetch("https://new-art-city-backend.herokuapp.com/api/v1/users/2/events")
    .then(resp=> resp.json())
    .then(eventsArray => dispatch(setUserEvents(eventsArray)))
  }
}


//helper for GET fetch
export const setUserEvents = (eventsArray) => {
  return {
    type: "LOAD_USER_EVENTS",
    payload: {
      eventsArray
    }
  }
}

//POST fetch
export const postUserEvents = (eventObj) => {
  // console.log("yay in posting an event!")
  console.log(eventObj)
  return (dispatch) => {
    fetch("https://new-art-city-backend.herokuapp.com/api/v1/users/2/events", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        "api_exhibition_id": eventObj["_attributes"]["id"],
        "exhibition_name": eventObj["Name"]["_text"],
        "exhibition_link": eventObj["_attributes"]["href"],
        "exhibition_description": eventObj["Description"]["_cdata"],
        "date_start": eventObj["DateStart"]["_text"],
        "date_end": eventObj["DateEnd"]["_text"],
        "venue_name": eventObj["Venue"]["Name"]["_text"],
        "venue_link": eventObj["Venue"]["_attributes"]["href"],
        "address": eventObj["Venue"]["Address"]["_text"],
        "latitude": eventObj["Latitude"]["_text"],
        "longitude": eventObj["Longitude"]["_text"],
        "phone_number": eventObj["Venue"]["Phone"]["_text"],
        "opening_hour": eventObj["Venue"]["OpeningHour"]["_text"],
        "closing_hour": eventObj["Venue"]["ClosingHour"]["_text"],
        "img_url": eventObj["Image"][2]["_attributes"]["src"].slice(0,-4),
        "is_free": true
      })
    })
    .then(resp => resp.json())
    .then(eventObj => dispatch(setUserEvent(eventObj)))
  }
}

//helper for post event
export const setUserEvent = (eventObj) => {
  return {
    type: "SELECTED_EVENT",
    payload: {
      eventObj
    }
  }
}

export const deleteUserEvent = (eventObj) => {
  return (dispatch) => {
    dispatch(deleteUserExhibit(eventObj))
    fetch(`https://new-art-city-backend.herokuapp.com/api/v1/users/2/events/${eventObj.id}`, {
      method: "DELETE"
    })
  }
}


//herlper for delete event
export const deleteUserExhibit = (eventObj) => {
  return {
    type: "REMOVE_USER_EVENT",
    payload: {
      eventObj
    }
  }
}
