import { callApi } from "../libs/callApi"
import { FILMS_URL } from "../constants/ApiConstants"
import ActionTypes from "../constants/ActionTypes"


const fetchFilmNamesFail = error => 
  ({
    type: ActionTypes.FETCH_FILMS_FAIL,
    payload: { error }
  })

const fetchFilmNamesRequest = () => 
  ({
    type: ActionTypes.FETCH_FILMS_REQUEST
  })

const fetchFilmNamesSuccess = items => 
  ({
    type: ActionTypes.FETCH_FILMS_SUCCESS,
    payload: { items }
  })


const fetchFilmNames = () => async dispatch => {
  dispatch(fetchFilmNamesRequest())
  const res = await callApi(FILMS_URL)

  res.json ? 
    dispatch(fetchFilmNamesSuccess(res.json.results))
    :
    dispatch(fetchFilmNamesFail(res.error))

}

export {
  fetchFilmNames
}