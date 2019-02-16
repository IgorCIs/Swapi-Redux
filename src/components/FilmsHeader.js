import React from 'react'
import FilmsHeaderList from './FilmsHeaderList';

const FilmsHeader = ({ films }) => {
  return (
    <div className='films-header'>
      <div className='films-header__wrapper'>
        <FilmsHeaderList {...films}/>
      </div>
    </div>
  )
}

export default FilmsHeader
