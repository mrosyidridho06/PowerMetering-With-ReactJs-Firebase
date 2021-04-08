import React, { Component } from 'react'
import Chart from 'chart.js'
import firebase from 'firebase'
import {Line} from 'react-chartjs-2'



function fire (numItems) {
  let fire = firebase.database().ref('PowerMetering/Home-Monitoring/Apparent-Power');
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
  let data = [];
  fire.on('value', function (snapshot) {
    data.push(snapshot.val())
  }); console.log(data)
return data;
}

function getData() {
  let data = [];
  data.push({
    title: 'COspi',
    data: fire
  })
  return data;
}

export default class tescos extends Component {

constructor(props){
  super(props);
  this.canvaRef = React.createRef();
}

componentDidUpdate(){
  this.myChart.data.datasets[0].data = this.data.map
  this.myChart.update()
}

componentDidMount(){
  this.myChart = new Chart(this.canvaRef.current, {
    type: 'line',
    options:{
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'week'
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0
            }
          }
        ]
      }
    },
    data: {
      labels: 'Cospi',
      datasets: {
        label: 'Cospi',
        data: {getData},
      }
    }
  })
}
render(){
    return <canvas ref={this.canvaRef} />
}
}
