export const setFilteredLocations = (eventsArray) => {
  return {
    type: "SET_FILTERED_LOCATIONS",
    payload: {
      eventsArray
    }
  }
}
