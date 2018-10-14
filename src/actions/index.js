export const loadEvents = () => {
  console.log("yay in redux!")
  return (dispatch) => {
      const convert = require('xml-js')
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const targetUrl = 'http://www.nyartbeat.com/list/event_free.en.xml'
        fetch(proxyUrl + targetUrl)
          .then(respone => respone.text())
          .then(data => convert.xml2json(data, {compact: true, spaces: 4}))
          .then(data=> JSON.parse(data))
          .then(events => dispatch(setEvents(events)))
  }
}

export const setEvents = (events) => {
  return {
    type: "LOAD_EVENTS",
    payload: {
      events
    }
  }
}
