import React from 'react'
import PropTypes from 'prop-types'


const FilmsHeaderList = ({ loading, error, items }) => {
  return (
    <div className='films-header__list'>
      <div className='films-header__list__wrapper'>
        {loading ? 
          <div className='films-header__list__loading'> loading </div> :
            error ? 'error' :   
              items.map((film, i) => (
                <div key={i} className='films-header__list__item'>
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
