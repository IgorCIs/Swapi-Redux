import React from 'react'

const FilmsBodyInfo = ({ film }) => {
  return (
    <div className='films-body__info'>
      <div className='films-body__info__title'> {film.title} </div>
      <div className='films-body__info__date'> 
        Release: {film.release_date}
      </div>
      <div className='films-body__info__director'>
        Director: {film.director}
      </div>
      <div className='films-body__info__producer'> 
        Producer{`${film.producer.split(',').length > 1 ? "'s" : ''}`}: {film.producer}
       </div>
    </div>
  )
}

export default FilmsBodyInfo
