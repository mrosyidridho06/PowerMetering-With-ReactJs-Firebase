import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/pi.png";
import {useAuth} from "../config/auth"

export default function Navb() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
    return(
        <nav className="flex justify-between bg-gray-400 p-5">
        <div className="text-white font-medium">
          <Link to="/"><img src={logo} alt='Logo'className="rounded-md inline w-9 h-6 text-white"></img> Energy Monitoring</Link>
        </div>
        <ul className="flex flex-row">
          <li className="pr-5 text-white font-medium">About</li>
          <li className="text-white font-medium"><button onClick={handleLogout}>Sign out</button></li>
        </ul>
      </nav>
    );
    
}