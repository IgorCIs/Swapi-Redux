import ActionTypes from "../constants/ActionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null
}

const films = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.FETCH_FILMS_REQUEST:  
          return {
            ...state,
            loading: true,
            error: null
          }
        case ActionTypes.FETCH_FILMS_SUCCESS:
          return {
            ...state,
            loading: false,
            items: action.payload.items
          }
        case ActionTypes.FETCH_FILMS_FAIL: 
          return {
            ...state,
            loading: false,
            items: [],
            error: action.payload.error
          }

          default:
            return state
    }
}

export default films