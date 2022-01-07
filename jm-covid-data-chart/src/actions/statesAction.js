import axios from 'axios'

export const getStatesData = () => async dispatch => {
  try {
    const response = await axios.get('https://api.apify.com/v2/key-value-stores/moxA3Q0aZh5LosewB/records/LATEST?disableRedirect=true')

    console.log(response)
  }
  catch (err) {
    dispatch({
      type: "ERROR"
    })
  }
}
