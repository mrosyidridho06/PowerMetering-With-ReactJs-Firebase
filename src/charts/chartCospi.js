import React, {Component} from 'react'
import Chart from 'chart.js';
import Navb from '../components/navbar'

export default class chartCospi extends Component {
  chartRef = React.createRef();

  componentDidMount(){
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Hari', 'Waktu'],
        datasets: [
          {
            label: 'Arus',
            data: [99, 222]
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
      
      </>
    )
  }
}



