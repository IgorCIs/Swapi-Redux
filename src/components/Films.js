import FilmsHeader from './FilmsHeader'
import React, { Component } from 'react'

class Films extends Component {
  componentDidMount() {
    this.props.fetchFilms()
  }
  
  render() {
    const { films } = this.props 
    console.log(films)
    return (
      <div className='films'>
        <FilmsHeader  
            films={films}
        />
      </div>
    )
  }
}

export default Films
