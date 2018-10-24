export const setDateRange = (datesObj) => {
  return {
    type: "SET_DATES_RANGE",
    payload: {
      datesObj
    }
  }
}
