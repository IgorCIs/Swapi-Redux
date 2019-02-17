import { connect } from 'react-redux';
import Films from '../components/Films';
import { fetchFilmNames, setActiveFilm } from '../actions/FilmsActions';
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
      },
      setActiveFilm(film) {
        // console.log(id)
        dispatch(setActiveFilm(film))
      }
    })
)(Films)
