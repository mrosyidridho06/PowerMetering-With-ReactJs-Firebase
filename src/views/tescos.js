import React, { Component } from 'react'
import {db} from '../config/fire'

class tescos extends React.Component {
  state = {
    Metering: null
  }
  componentDidMount(){
    console.log('mounted')
    db.collection("Metering").get().then(snapshot => {
      const moni = []
      snapshot.forEach(doc => {
        const data = doc.data()
        moni.push(data)
      })
      this.setState({moni:moni})
      console.log(snapshot.doc)
    }).catch(error => console.error())
  }
  render() {
    return (
      <div>
        <h1>TES</h1>
        {this.state.Metering &&
        this.state.Metering.map(Metering => {
          return(
          <div>
            <p>{Metering.Cospi}</p>
          </div>
          )
        })}
      </div>
    )
  }
}

export default tescos
