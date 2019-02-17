import React from 'react'
import PropTypes from 'prop-types'


const FilmsHeaderList = ({ setActiveFilm=f=>f, loading, error, items, active }) => {
  return (
    <div className='films-header__list'>
      <div className='films-header__list__wrapper'>
        {loading ? 
          <div className='films-header__list__loading'> loading </div> :
            error ? 'error' :   
              items.map((film, i) => (
                <div key={i} onClick={() => setActiveFilm(film)} className={`films-header__list__item ${active && active.episode_id === film.episode_id ? 'active' : ''}`}>
                  <div className='films-header__list__item__name'> { film.title } </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

FilmsHeaderList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.array
}

export default FilmsHeaderList
