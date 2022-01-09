const initialState = {
  loading: false,
  error: false,
  stateNames: [],
  stateCases: []
}

const statesReducer = (state = initialState, action) => {
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
        stateNames: payload.stateNames,
        stateCases: payload.stateCases
      }
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}

export default statesReducer;
