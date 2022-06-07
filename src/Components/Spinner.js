import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div  className='text-center spinner' style={{height:"80vh"}}>
        <img src={loading} style={{width:"80px",height:'80px'}} alt='loading'/>
      </div>
    )
  }
}

export default spinner
