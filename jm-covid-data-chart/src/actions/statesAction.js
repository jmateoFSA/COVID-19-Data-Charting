import axios from 'axios'

export const getStatesData = () => async dispatch => {
  try {
    const response = await axios.get('https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true')

    const stateNames = [];
    const stateCases = [];

    response.casesByState.map(x => stateNames.push(x.name))
    response.casesByState.map(x => stateCases.push(x.casesReported))

    dispatch({
      type: "GOT_DATA",
      payload: {
        stateNames,
        stateCases
      }
    })
  }
  catch (err) {
    dispatch({
      type: "ERROR"
    })
  }
}
