import React, {useRef, useState} from "react";
import {SignInWithGoogle, useAuth} from '../config/auth'
import {Link, useHistory} from 'react-router-dom'
import Alert from '../components/Alert'
import logo from '../assets/pi.png'
import Gicon from '../assets/google-icon.svg'



export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }
  return (

    <>
      <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md object-center rounded">
        <div className="py-8 px-8 rounded-xl">
          <form onSubmit={handleSubmit}>
            {error && <Alert>{error}</Alert>}
            <div className="object-none px-28">
              <img src={logo} className="min-h-full max-h-24 mx-auto" />
            </div>
            <div className="my-5 text-sm focus-within:text-gray-600">
              <label className="block text-black">Email</label>
              <input type="text" autoFocus ref={emailRef} id="email" className="rounded-md px-4 py-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-100 w-full" required></input>
            </div>
            <div className="my-5 text-sm focus-within:text-gray-600">
              <label className="block text-black">Password</label>
              <input ref={passwordRef} autoFocus type="password" id="password" className="rounded-md px-4 py-3 mt-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-100 w-full" required></input>
            </div>
            <div className="text-sm pb-2 text-right font-medium text-indigo-600 hover:text-indigo-500">
              <Link to="/reset">Forgot your password?</Link>
            </div>
            <button disabled={loading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm  font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
            <div className="text-xs text-center pt-2">
              <div className="pb-3">or login with</div>
              <button className="hover" onClick={SignInWithGoogle}><img src={Gicon} className="h-6 w-6 fill-current"></img></button>
            </div>

            <h5 className="mt-4 text-xs text-center font-light text-gray-400">Not have an account? <Link to="/signup">Sign Up</Link></h5>
          </form>

        </div>
      </div>
      <p className="text-gray-500 text-center text-md pb-0">Copyright &copy; 2021 PT. Ruang Cipta Teknologi</p>
    </>
  )
    }