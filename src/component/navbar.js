import { React } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/pi.png";
import fire from "../config/fire";
import {Redirect} from "react-router"

function Navb() {
    return(
        <nav className="flex justify-between bg-gray-200 p-5">
        <div>
          <Link to="/"><img src={logo} alt='Logo'className="rounded-md inline w-8 h-5 text-white"></img> Energy Monitoring</Link>
        </div>
        <ul className="flex flex-row">
          <li className="pr-5">About</li>
          <li><button onClick={() => fire.auth().signOut((<Redirect to="/login"/>))}>Sign out</button></li>
        </ul>
      </nav>
    );
    
}
export default Navb;