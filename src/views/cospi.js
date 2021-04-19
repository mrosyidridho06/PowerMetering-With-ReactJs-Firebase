import React, {Component} from 'react'
import Chart from 'chart.js';
import Navb from '../components/navbar'
import firebase from 'firebase'
let myLineChart;

export default class cospi extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
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
  
  componentDidMount(){
      const myChartRef = this.chartRef.current.getContext('2d');
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );

      document.title = "Cospi"


      var dataCos = [];
      var red = firebase.database().ref('PowerMetering/Home-Monitoring/Watt').child('data1');
      red.on('value', function (snapshot) {
          var record = snapshot.val()
          dataCos.push(record)    
      console.log(record)

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
                  xAxes: [{
                    type: "time",
                    time: {
                      unit: 'hour',
                      unitStepSize: 0.5,
                      round: 'hour',
                      tooltipFormat: "h:mm:ss a",
                      displayFormats: {
                        hour: 'MMM D, h:mm A'
                      }
                    }
                  }],
                  responsive:true,
                  title: {
                      display: true,
                      text: 'Chart Cospi'
                  }
                }
      })
    })
    
  //  buildChart = () => {
  //   const myChartRef = this.chartRef.current.getContext("2d");
  //   const { data, average, labels } = this.props;

  //   if (typeof myLineChart !== "undefined") myLineChart.destroy();

  //   myLineChart = new Chart(myChartRef, {
  //       type: "line",
  //       data: {
  //           //Bring in data
  //           labels: labels,
  //           datasets: [
  //               {
  //                   label: "Sales",
  //                   data: data,
  //                   fill: false,
  //                   borderColor: "#6610f2"
  //               },
  //               {
  //                   label: "National Average",
  //                   data: average,
  //                   fill: false,
  //                   borderColor: "#E0E0E0"
  //               }
  //           ]
  //       },
  //       options: {
  //           //Customize chart options

  //       }
  //   });
   }
  render(){
    return (
      <>
      <Navb />
      <div className="container p-5 md:h-2/4 md:w-2/4">
        <div>
          <canvas id='myChart' ref={this.chartRef}></canvas>
        </div>
        <div className="text-indigo-900 text-2xl text-center font-serif">Ini Jam {this.state.date.toLocaleTimeString()}</div>
      </div>
      <footer className="text-center md:pt-52"><p className="text-gray-500">Copyright &copy; 2021 PT. Ruang Cipta Teknologi</p></footer>
      </>
    )
  }
}

