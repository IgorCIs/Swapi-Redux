import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilmsBodyInfo from './FilmsBodyInfo';

export class FilmsBody extends Component {
  render() {
    const { active } = this.props.films

    return (
        <div className='films-body'>
          <div className='films-body__wrapper'>
          {active ? 
            <FilmsBodyInfo film={active}/>  
          : ''}
          </div>
        </div> 
    )
  }
}

FilmsBody.propTypes = {
  films: PropTypes.object,
  film: PropTypes.object,
}

export default FilmsBody
