import { React, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/pi.png";
import {useAuth} from "../config/auth"
import {Transition, Menu} from '@headlessui/react'
import app from '../config/fire'

export default function Navb() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const verifyEmail = useAuth()
  const history = useHistory()

  var user = app.auth().currentUser.displayName
  var foto = app.auth().currentUser.photoURL
  var id = app.auth().currentUser.uid

  console.log(foto)
  console.log(id)

  const [isOpen, setIsOpen] = useState(false)

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
      // <>
      //   <nav className="flex justify-between bg-gray-400 p-5 shadow-md">
      //     <div className="text-white font-medium">
      //       <Link to="/"><img src={logo} alt='Logo' className="rounded-md inline w-9 h-6 text-white"></img> Energy Monitoring</Link>
      //     </div>
      //     <ul className="flex flex-row">
      //     <li className="pr-5 text-white font-medium">Welcome {currentUser.displayName}</li>
      //     <Link to="/cospi"><li className="pr-5 text-white">Cospi</li></Link>
      //     <Link to="/arus"><li className="pr-5 text-white">Arus</li></Link>
      //     <Link to="/tegangan"><li className="pr-5 text-white">Tegangan</li></Link>
      //       <li className="pr-5 text-white font-medium">About</li>
      //       <div className="flex pr-5 -space-x-1 overflow-hidden">
      //       <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={currentUser.displayImage} alt=""></img>
      //       </div>
      //       <li className="text-white font-medium"><button onClick={handleLogout}>Sign out</button></li>
      //     </ul>
      //   </nav>
      // </>
        <div>
        <nav className="bg-gray-400">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                    className="h-6 w-9"
                    src={logo}
                    />
                  </Link> 
                </div>
                <div className="font-medium pl-6 text-white"> Plannet Innteligent</div>
                <div className="hidden md:block ">
                  <div className="inline-flex pl-64 justify-items-end items-center">
                    <Link to="/dashboard">
                      <a className="hover:bg-gray-700 hover:text-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium"> Dashboard </a>
                    </Link>

                    <Link to="/cospi">
                    <a
                      href="#"
                      className="hover:bg-gray-700 hover:text-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Cospi
                    </a>
                    </Link>

                    <Link to="/arus">
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Arus
                    </a>
                    </Link>
                  
                    <Link to="/tegangan">
                    <a
                      className="text-white hover:bg-gray-700 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Tegangan
                    </a>
                    </Link>
                    
                      <div className="relative pl-96">
                        <Menu>
                          {({ open }) => (
                            <>
                              <span className="rounded-md shadow-sm">
                                <Menu.Button className="g-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white">
                                  <span>
                                    <img className="rounded-full block h-8 w-8" src={foto}/>
                                  </span>
                                  <svg
                                    className="w-8 h-8"
                                    viewBox="0 0 20 20"
                                    fill="white"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </Menu.Button>
                              </span>

                              <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                >
                                  <div className="px-4 py-3">
                                    <p className="text-sm leading-5">Signed in as</p>
                                    <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                                      {user}
                                    </p>
                                  </div>

                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="/account"
                                          className={`${
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700"
                                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                        >
                                          Account settings
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>

                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          onClick={handleLogout}
                                          className={`${
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700"
                                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                        >
                                          Sign out
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link to="/dashboard">
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>
                  </Link>

                  <Link to="/arus">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Arus
                  </a>
                  </Link>
                  <Link to="/cospi">
                  <a
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Cospi
                  </a>
                  </Link>
                  <Link to="/tegangan">
                  <a
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Tegangan
                  </a>
                  </Link>
                  <div className="px-3 py-2">
                        <button type="button" onClick={handleLogout}>
                          Sign Out
                        </button>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    );
    
}