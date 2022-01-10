import axios from 'axios'

export const getGlobalData = () => async dispatch => {
  try {
    const response = await axios.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')

    const countryNames = [];
    const countryCases = [];

    response.data.map(y => countryNames.push(y.country))
    response.data.map(y => countryCases.push(y.infected))

    dispatch({
      type: "GOT_GLOBAL_DATA",
      payload: {
        countryNames,
        countryCases
      }
    })
  }
  catch (err) {
    dispatch({
      type: "ERROR2"
    })
  }
}
