import React, { useRef, useState } from "react"
import { useAuth } from "../config/auth"
import { Link } from "react-router-dom"
import logo from "../assets/pi.png"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }
  return(
      <>
          <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md object-center rounded">
              <div className="py-8 px-8 rounded-xl">
                  <form onSubmit={handleSubmit}>
                      {/* {error && <Alert>{error}</Alert>} */}
                      <div className="object-none px-28">
                          <img src={logo} className="min-h-full max-h-24 mx-auto" />
                      </div>
                      <div className="my-5 text-sm focus-within:text-gray-600">
                          <label className="block text-black">Email</label>
                          <input type="text" autoFocus ref={emailRef} id="email" className="rounded-md px-4 py-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-100 w-full" required></input>
                      </div>
                      <button disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Reset</button>
                      <h5 className="mt-4 text-xs text-center font-light text-gray-400">Not have an account? <Link to="/signup">Sign Up</Link></h5>
                  </form>
              </div>
          </div>
      </>
  )
  }