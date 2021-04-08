import React, {Component} from 'react'
import Chart from 'chart.js';
import Navb from '../components/navbar'
import firebase from 'firebase'


export default class cospi extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    // this.setCospiDat = this.setCospiDat.bind(this);
    this.state = {
      datae: [],
      dateCospi: [],
      date: new Date()
    }
    
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date
    });
  }
  
  
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );


    var dataCos = [];
    var red = firebase.database().ref('PowerMetering/Home-Monitoring/Power-Factor');
    red.on('value', function (snapshot) {
        var record = snapshot.val()
        dataCos.push(record)

      
    //   // console.log(snapshot.val())     
    console.log(dataCos)

    new Chart(myChartRef, {
      type: 'line',
        values:'Cospi',
        data: {
            labels: ['Cospi'],
            datasets: [{
                label:'Cospi',
                data: dataCos,
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)'],
                borderColor: [
                'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
            options: {
                scales:{
                  y:{
                    beginAtZero: true
                  }
                },
                responsive:true,
                title: {
                    display: true,
                    text: 'Chart Cospi'
                }
                // tooltips: {
                //     mode: 'index',
                //     intersect: true
                // },
                // annotation: {
                //     annotations: [{
                //     type: 'line',
                //     scaleID: 'y-0',
                //     value: 5,
                //     borderColor: 'rgb(75, 192, 192)',
                //     borderWidth: 4,
                //     label: {
                //         enabled: false,
                //         content: 'Test label'
                //     }
                //     }]
                // },
              }
    })
  })
  }
  render(){
    return (
      <>
      <Navb />
      <div className="container p-5 h-2/4 w-2/4">
        <div>
          <canvas id='myChart' ref={this.chartRef}></canvas>
        </div>
        <div className="text-indigo-900 text-2xl text-center font-serif">Ini Jam {this.state.date.toLocaleTimeString()}</div>
      </div>
      </>
    )
  }
}

