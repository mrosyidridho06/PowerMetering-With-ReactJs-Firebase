import React, { Component } from 'react'
import Navb from '../components/navbar'
import firebase from 'firebase'
import kipas from '../assets/fan.png'
import lampu from '../assets/idea.png'
import kamar from '../assets/bed.png'
import kipas2 from '../assets/windmill.png'
import tv from '../assets/television.png'
import kipas3 from '../assets/fan (1).png'
import lampu2 from '../assets/chandelier.png'
import lampu3 from '../assets/illumination.png'


export default class Rumah extends Component {
    constructor(props){
        super(props);
        this.handleClick1On = this.handleClick1On.bind(this);
        var fire1 = firebase.database().ref('PowerMetering/Home-Automation/Relay1')
        this.state = {
            SW1: fire1
            };
    }

    handleClick1On(){
        var fire1 = firebase.database().ref('PowerMetering/Home-Automation/Relay1')
        if(this.setState(state => ({
            SW1: fire1.set('ON'),
            SW1: !state.SW1
        }))); else return this.state.SW1
    }
render(){

return (
            <>
            <Navb />
            <div className="container my-4 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap px-12">
                    <div className="my-1 px-12 pt-2">
                        <article className="bg-transparent justify-center">
                            <div className="justify-center">
                                <img alt="Placeholder" className="flex justify-center w-32 h-32" src={kipas}></img>
                            </div>
                            <header className="items-center text-center leading-tight p-2 md:p-4">
                                <h1 className="text-lg text-center">
                                    Fan 1
                            </h1>
                            </header>
                            <footer className="flex justify-center">
                                <span
                                    role="checkbox"
                                    aria-checked={this.SW1}
                                    tabIndex="0"
                                    onClick={this.handleClick1On}
                                    className={`${this.state.SW1 ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        aria-checked={this.state.SW1}
                                        className={`${this.state.SW1? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div>
                    {/* <div className="my-1 px-12 relative">
                        <article className="bg-transparent justify-center">
                            <img alt="Placeholder" className="block h-32 w-32" src={lampu}></img>
                            <header className="items-center text-center leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    Kamar Tidur 1
                            </h1>
                            </header>
                            <footer className="flex items-center justify-center leading-none">
                                <span
                                    role="checkbox"
                                    aria-checked={this.isOn}
                                    tabIndex="0"
                                    onClick={this.isOn}
                                    className={`${this.state.isOn ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${this.state.isOn ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div> */}
                    {/*<div className="my-1 px-12 pt-2">
                        <article className="bg-transparent">
                            <img alt="Placeholder" className="block h-32 w-32" src={kamar}></img>
                            <header className="items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg text-center">
                                    Ruang Keluarga
                                </h1>
                            </header>
                            <footer className="flex items-center justify-center leading-none">
                            <span
                                    role="checkbox"
                                    aria-checked={isOn3}
                                    tabIndex="0"
                                    onClick={() => setIsOn3(!isOn3
                                        )}
                                    className={`${isOn3 ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${isOn3 ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div>
                    <div className="my-1 px-12 pt-2">
                        <article className="bg-transparent">
                            <img alt="Placeholder" className="block h-32 w-32" src={kipas2}></img>
                            <header className="items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg text-center">
                                    Kipas
                                </h1>
                            </header>
                            <footer className="flex items-center justify-center leading-none">
                            <span
                                    role="checkbox"
                                    aria-checked={isOn4}
                                    tabIndex="0"
                                    onClick={() => setIsOn4(!isOn4)}
                                    className={`${isOn4 ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${isOn4 ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div>
                    <div className="my-1 p-12 relative">
                        <article className=" bg-transparent">
                            <img alt="Placeholder" className="block h-32 w-32" src={kipas3}></img>
                            <header className="items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg text-center">
                                    Kipas Kamar
                                </h1>
                            </header>
                            <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                            <span
                                    role="checkbox"
                                    aria-checked={isOn5}
                                    tabIndex="0"
                                    onClick={() => setIsOn5(!isOn5)}
                                    className={`${isOn5 ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${isOn5 ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div>
                    <div className="my-1 p-12 relative">
                        <article className="bg-transparent">
                            <img alt="Placeholder" className="block h-32 w-32" src={lampu3}></img>
                            <header className="text-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg text-center">
                                    Kamar 2
                                </h1>
                            </header>
                            <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                            <span
                                    role="checkbox"
                                    aria-checked={isOn6}
                                    tabIndex="0"
                                    onClick={() => setIsOn6(!isOn6)}
                                    className={`${isOn6 ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${isOn6 ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div>
                    <div className="my-1 p-12 relative">
                        <article className="bg-transparent">
                            <img alt="Placeholder" className="block h-32 w-32" src={lampu2}></img>
                            <header className="items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg text-center">
                                    Lampu Dapur
                                </h1>
                            </header>
                            <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                                <span
                                    role="checkbox"
                                    aria-checked={isOn7}
                                    tabIndex="0"
                                    onClick={() => setIsOn7(!isOn7)}
                                    className={`${isOn7 ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${isOn7 ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div>
                    <div className="my-1 p-12 relative">
                        <article className="bg-transparent">
                            <img alt="Placeholder" className="block h-32 w-32" src={tv}></img>
                            <header className="items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg text-center">
                                    TV
                                </h1>
                            </header>
                            <footer className="flex items-center justify-center leading-none p-2 md:p-4">
                                <span
                                    role="checkbox"
                                    aria-checked={isOn8}
                                    tabIndex="0"
                                    onClick={() => setIsOn8(!isOn8)}
                                    className={`${isOn8 ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`${isOn8 ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
                                    ></span>
                                </span>
                            </footer>
                        </article>
                    </div> */}
                </div>
            </div>
            </>
)
                }
            }