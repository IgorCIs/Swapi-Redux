import React from 'react'
import FilmsHeaderList from './FilmsHeaderList'

const FilmsHeader = ({ films, setActiveFilm}) => {
  return (
    <div className='films-header'>
      <div className='films-header__wrapper'>
        <FilmsHeaderList {...films}
                        setActiveFilm={setActiveFilm}
        />
      </div>
    </div>
  )
}

export default FilmsHeader
