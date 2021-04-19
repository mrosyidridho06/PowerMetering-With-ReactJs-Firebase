import React, {useEffect, useState} from 'react'
import firebase from 'firebase'
import {Switch} from '@headlessui/react'
import Chart from 'react-google-charts'

export default function Cos(){
    const [cospiDat, setCospiDat] = useState({});
    const [switchValue, setSwitchValue] = useState(false);
    
    var dataFire = [];
    var red = firebase.database().ref('PowerMetering/Home-Monitoring/Power-Factor');
    red.on('value', function (snapshot) {
        var record = snapshot.val()
        dataFire.push(record)
    })
      
    //   // console.log(snapshot.val())     
    console.log(dataFire)
    const fire = firebase.database().ref('PowerMetering/Home-Automation/Relay1');

    // const chart = () => {
    //     let dateCospi = [];
    //     const red = firebase.database().ref('PowerMetering/Home-Monitoring/Power-Factor');
    //     let datae = [];
    //     red.on('value', function(snapshot){
    //         var db = snapshot.val()
    //         dateCospi.push(db)
        
    //     setCospiDat({
    //         labels: ["Cospi"],
    //         datasets: [
    //             {
    //                 label: "Cospi",
    //                 data: dateCospi
    //             }
    //         ]
            
    //     })
          
    //     console.log(dateCospi);
    // })
    // }
    // useEffect(() => {
    //     chart()
    // }, [])
    return(
        <div className="flex items-center justify-center p-12">
            <div className="w-full max-w-xs mx-auto">
                <Switch.Group as="div" className="flex items-center space-x-4">
                    <Switch.Label>Enable notifications</Switch.Label>
                    <Switch
                        as="button"
                        checked={switchValue}
                        onChange={setSwitchValue}
                        className={`${switchValue ? "bg-indigo-600" : "bg-gray-200"
                            } relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
                    >
                        {({ checked }) => (
                            <span
                                className={`${checked ? "translate-x-5" : "translate-x-0"
                                    } inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
                            />
                        )}
                    </Switch>
                </Switch.Group>
            </div>
            <Chart
                width={'600px'}
                height={'400px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'dogs'],
                    [dataFire],
                    
                ]}
                options={{
                    hAxis: {
                    title: 'Time',
                    },
                    vAxis: {
                    title: 'Popularity',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
        />
        </div>
    )
}