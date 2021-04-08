import React, {Component} from 'react'
import firebase from 'firebase'
import Navb from '../components/navbar'

export default class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ApparentPower: null,
            Cost: [],
            Cospi: null,
            Pemakaian: null,
            Vrms: null,
            Irms: null,
            Watt: null,
        }



    } componentDidMount(){
        firebase.database().ref('PowerMetering/Home-Monitoring/Irms')
        .on('value', snap => {
            const dataI = snap.val();
            this.setState({dataI: dataI, isLoading: false});
        });
        firebase.database().ref('PowerMetering/Home-Monitoring/Vrms')
        .on('value', snap => {
            const dataV = snap.val();
            this.setState({dataV: dataV, isLoading: false});
        });
        firebase.database().ref('PowerMetering/Home-Monitoring/Apparent-Power')
        .on('value', snap => {
            const dataS = snap.val();
            this.setState({dataS: dataS, isLoading: false});
        });
        firebase.database().ref('PowerMetering/Home-Monitoring/Real-Power')
        .on('value', snap => {
            const dataW = snap.val();
            this.setState({dataW: dataW, isLoading: false});
        });
        firebase.database().ref('PowerMetering/Home-Monitoring/Power-Factor')
        .on('value', snap => {
            const dataC = snap.val();
            this.setState({dataC: dataC, isLoading: false});
        });
        firebase.database().ref('PowerMetering/Home-Monitoring/Power-Consumption')
        .on('value', snap => {
            const dataK = snap.val();
            this.setState({dataK: dataK, isLoading: false});
        });
        firebase.database().ref('PowerMetering/Home-Monitoring/Cost')
        .on('value', snap => {
            const dataB = snap.val();
            this.setState({dataB: dataB, isLoading: false});
        });
    }

    render(){
        const { dataI, dataV, dataS, dataK, dataW, dataC, dataB } = this.state;
        return (
            <>
            <Navb />
            <div className="text-4xl text-left font-medium py-5">Dashboard Real time</div>
            <div className="container min-w-full text-center">
                <table className="table-auto w-screen">
                    <thead className="justify-between">
                        <tr className="bg-gray-200 outline-none">
                            <th className="py-2 text-black font-medium text-sm">
                                Apparent Power (VA)
                            </th>
                            <th className="text-black font-medium text-sm">
                            Real Power(Watt)
                            </th>
                            <th className="text-black font-medium text-sm">
                                Voltage (Vrms)
                            </th>
                            <th className="text-black font-medium text-sm">
                                Current (Irms)
                            </th>
                            <th className="text-black font-medium text-sm">
                                Power Factor
                            </th>
                            <th className="text-black font-medium text-sm">
                                Power Consumption Today (WattHour)
                            </th>
                            <th className="text-black font-medium text-sm">
                                Cost Today (Rp.)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                        <tr className="mb-2 sm:mb-0">
                            <td id="ap" className=" text-center font-normal border-grey-light border hover:bg-gray-100 p-3">{dataS}</td>
                            <td id="watt" className="border-grey-light border hover:bg-gray-100 p-3">{dataW}</td>
                            <td id="volt"className="border-grey-light border hover:bg-gray-100 p-3 ">{dataV}</td>
                            <td id="irms" className="border-grey-light border hover:bg-gray-100 p-3">{dataI}</td>
                            <td id="cospi" className="border-grey-light border hover:bg-gray-100 p-3">{dataC}</td>
                            <td id="consum" className="border-grey-light border hover:bg-gray-100 p-3 ">{dataK}</td>
                            <td id="cost" className="border-grey-light border hover:bg-gray-100 p-3 ">{dataB}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer className="text-center">Copyright &copy; CV. Planet Intelligent 2021</footer>
            </>
        )
    }
}