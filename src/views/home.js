import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import logo from "../assets/pi.png";
import {useAuth} from "../config/auth";

  
export default function  Home() {
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
  return (
    <>
      <nav className="flex justify-between bg-gray-200 p-5">
        <div>
          <Link to="/"><img src={logo} alt='Logo'className="rounded-md inline w-8 h-5 text-white"></img> Energy Monitoring</Link>
        </div>
        <ul className="flex flex-row">
          <li className="pr-5">About</li>
          <li><button onClick={handleLogout}>Sign out</button></li>
        </ul>
      </nav>
      <h1 className="text-base text-2xl text-center font-bold pt-12">Energy Monitoring & Home Automation</h1>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <Link to="/dashboard"><img src={logo} className="w-full"></img> Monitoring </Link>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img src={logo} className="w-full"></img>
          </div>
          </div>
        </div>
      </div>
      <footer className="text-center"><p className="text-gray-300">Copyright CV. Plannet Intelligent</p></footer>
    </>
  )
}
