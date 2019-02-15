import { connect } from 'react-redux';
import Films from '../components/Films';
import { fetchFilmNames } from '../actions/FilmsActions';
import { getFilms } from '../selectors/CommonSelectors';

export default connect(
  state =>
    ({
      films: getFilms(state)
    }),
  dispatch => 
    ({
      fetchFilms() {
        dispatch(fetchFilmNames())
      }  
    })
)(Films)