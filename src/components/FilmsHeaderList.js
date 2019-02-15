import React from 'react'
import PropTypes from 'prop-types'


const FilmsHeaderList = ({ loading, error, items }) => {
  return (
    <div className='films-header__list'>
      {loading ? 
        'loading' :
          error ? 'error' :   
            items.map((film, i) => (
              <div key={i} className='films-header__item'>
                <div className='films-header__item__name'> { film.title } </div>
              </div>
            ))
          }
    </div>
  )
}

FilmsHeaderList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.array
}

export default FilmsHeaderList
