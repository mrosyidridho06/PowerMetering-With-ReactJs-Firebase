import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js'
import firebase from 'firebase'

export default function Cos(){
    // const [chatData, setChartData] = useState({});
    const [cospiDat, setCospiDat] = useState({});

    const chart = () => {
        let dateCospi = [];
        const red = firebase.database().ref('PowerMetering/Home-Monitoring/Power-Factor');
        let datae = [];
        red.on('value', function(snapshot){
            var db = snapshot.val()
            dateCospi.push(db)
        
        
        setCospiDat({
            labels: ["Cospi"],
            datasets: [
                {
                    label: "Cospi",
                    data: dateCospi
                }
            ]
            
        })
          
        console.log(dateCospi);
    })
    }
    useEffect(() => {
        chart()
    }, [])
    return(
        <div className="container">
            <div style={{height:'450px', width:'800px'}}>
            <Line data={cospiDat}/>
            </div>
        </div>
    )
}