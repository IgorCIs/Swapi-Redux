import FilmsHeader from './FilmsHeader'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilmsBody from './FilmsBody';


class Films extends Component {
  componentDidMount() {
    this.props.fetchFilms()
  }
  
  render() {
    const { films, setActiveFilm } = this.props 
		console.log(films)
    
    return (
      <div className='films'>
        <FilmsHeader  
            films={films}
            setActiveFilm={setActiveFilm}
        />
        <FilmsBody
            films={films}
        />
      </div>
    )
  }
}

Films.propTypes = {
  films: PropTypes.object,
  setActiveFilm: PropTypes.func,
}

export default Films
