import React, {Component} from 'react'
import Chart from 'chart.js';
import Navb from '../components/navbar'
import {db} from '../config/fire'


export default class tegangan extends Component {
  chartRef = React.createRef();


  componentDidMount(){
    db.collection('Metering').get().then(snapshot =>{
      console.log(snapshot.docs)
    })
    .catch(error => console.error())

    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Hari', 'Waktu'],
        datasets: [
          {
            label: 'Tegangan',
            data: [99, 222, 44, 55]
          }
        ]
      },
      options: {
      }
    })
  }
  render(){
    return (
      <>
      <Navb />
      <div className="container">
        <div>
          <canvas id='myChart' ref={this.chartRef}></canvas>
        </div>
      </div>
      <footer className="text-center"><p className="text-gray-500">Copyright &copy; CV. Plannet Intelligent</p></footer>
      
      </>
    )
  }
}