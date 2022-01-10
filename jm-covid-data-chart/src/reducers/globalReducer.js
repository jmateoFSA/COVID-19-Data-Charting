const initialState = {
  loading2: true,
  error2: false,
  countryNames: [],
  countryCases: []
}

const globalReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case "GOT_GLOBAL_DATA":
      return {
        ...state,
        loading2: false,
        countryNames: payload.countryNames,
        countryCases: payload.countryCases
      }
    case "ERROR2":
      return {
        ...state,
        loading2: false,
        error2: true
      }
    default:
      return state;
  }
}

export default globalReducer;
