import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import logo from "../assets/pi.png";
import pie from "../assets/pie-chart.png"
import lamp from "../assets/smart.png"
import {useAuth} from "../config/auth";
import app from "../config/fire"

  
export default function  Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  var user = app.auth().currentUser.displayName

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
      <nav className="flex justify-between bg-gray-400 p-5">
          <Link to="/">
            <img src={logo} alt='Logo'className="rounded-md inline w-9 h-6 text-white"></img>
          </Link>
        <ul className="flex flex-row">
          <li className="pr-5 text-white font-medium">Welcome {user}</li>
          <li className="pr-5 text-white font-medium">About</li>
          <li className="text-white font-medium"><button onClick={handleLogout}>Sign out</button></li>
        </ul>
      </nav>
      <h1 className="text-2xl text-center font-bold pt-6">Energy Monitoring & Home Automation</h1>
      <div className="container my-4 mx-auto sm:px-20 md:px-12 lg:pt-16 md:pt-16 ">
        <div className="content-center flex flex-wrap mx-auto md:px-48 lg:grid-cols-2 sm:px-3 px-24 sm:gap-32 md:gap-22">
            <div className="max-w-xs text-black font-medium text-center bg-opacity-0 sm:py-3">
              <Link to="/dashboard"><img src={pie} className="w-full sm:h-5/6"></img> Monitoring </Link>
            </div>
            <div className="max-w-xs text-black font-medium text-center sm:py-3">
              <Link to="/rumah"><img src={lamp} className="w-full sm:h-5/6"></img> Home Automation </Link>
          </div>
        </div>
      </div>
      <footer className="text-center md:pt-16"><p className="text-gray-500">Copyright &copy; CV. Plannet Intelligent</p></footer>
    </>
  )
}
