import * as React from "react";
import '../style/main.css';
import Navb from "../components/navbar";
import {Link} from "react-router-dom"
import sidebar from "../components/sidebar"
import {FirebaseDatabaseProvider} from "@react-firebase/database"
import { SidebarHeader } from "react-pro-sidebar";


function Dash() {
    return (
        <>
        <Navb/>
        <div className="container flex">
            
        </div>
        <div className="text-4xl text-left font-medium py-5">Dashboard Real time</div>
        <div className="flex items-center justify-center">
            <table className="min-w-full rounded table-auto">
                <thead className="justify-between">
                    <tr className="bg-gray-200 outline-none">
                        <th className="py-1">
                            <span className="text-black">Apparent Power (VA)</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-black">Real Power(Watt)</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-black">Voltage (Vrms)</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-black">Current (Irms)</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-black">Power Factor</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-black">Power Consumption Today (WattHour)</span>
                        </th>
                        <th className="px-16 py-2">
                            <span className="text-black">Cost Today (Rp.)</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="flex-1 sm:flex-none">
                    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td id="ap" className="border-grey-light border hover:bg-gray-100 p-3">Apparent Power</td>
                        <td id="watt" className="border-grey-light border hover:bg-gray-100 p-3">watt</td>
                        <td id="volt"className="border-grey-light border hover:bg-gray-100 p-3 ">Voltage</td>
                        <td id="irms" className="border-grey-light border hover:bg-gray-100 p-3">Arus</td>
                        <td id="cospi" className="border-grey-light border hover:bg-gray-100 p-3">cospi</td>
                        <td id="consum" className="border-grey-light border hover:bg-gray-100 p-3 ">PowerConsum</td>
                        <td id="cost" className="border-grey-light border hover:bg-gray-100 p-3 ">Biaya</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
        
    );
}
export default Dash;