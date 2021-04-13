import React, {useEffect, useState} from 'react'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js'
import firebase from 'firebase'
import {Switch} from '@headlessui/react'

export default function Cos(){
    const [cospiDat, setCospiDat] = useState({});
    const [switchValue, setSwitchValue] = useState(false);

    const fire = firebase.database().ref('PowerMetering/Home-Automation/Relay1');


    

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
        </div>
    )
}