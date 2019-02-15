import React from 'react'
import FilmsHeaderList from './FilmsHeaderList';

const FilmsHeader = ({ films }) => {
  return (
    <div className='films-header'>
      <div className='container'>
        <div className='wrapper'>
          <FilmsHeaderList {...films}/>
        </div>
      </div>
    </div>
  )
}

export default FilmsHeader
