import React, { useRef, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {useAuth} from "../config/auth";
import logo from "../assets/pi.png";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  return(
    <>
    <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md object-center">
      <div className="py-8 px-8 rounded-xl">
        <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <img src={logo} className="max-h-24 min-h-full mx-auto"/>
        </div>
          <div className="my-5 text-sm">
            <label className="block text-black">Email</label>
            <input type="text" autoFocus ref={emailRef} id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" required></input>
          </div>
          <div className="my-5 text-sm">
          <label className="block text-black">Password</label>
          <input type="text" ref={passwordRef} autoFocus id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" required></input>
          </div>
          <div className="my-5 text-sm">
          <label className="block text-black">Konfirmasi Password</label>
          <input type="text" ref={passwordConfirmRef} autoFocus id="confirmpassword" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" required></input>
          </div>
          <button disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Daftar</button>
        <h5 className="mt-4 text-xs text-center font-light text-gray-400">Already have account? <Link to="/login">Login</Link></h5>
        </form>  
      </div>
    </div>
    <p className="text-gray-500 text-center justify-self-center">Copyright CV. Planet Intelligent 2021</p>
    </>
  )
}