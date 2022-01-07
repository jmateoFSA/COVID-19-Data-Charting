const statesReducer = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case "WAITING":
      return {
        ...state,
        loading: true
      }
    case "GOT_DATA":
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}

export default statesReducer;
