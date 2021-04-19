import React from 'react'
import {useEffect} from 'react'
import Navb from '../components/navbar'



export default function Account() {
    useEffect(() => {
        document.title = 'Profile'
    }, []);
    return (
        <>
        <Navb />
        <div className="container">
        <div className="md:grid md:grid-cols-3 md:gap-6">
                    
                    <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label for="company_website" className="block text-sm font-medium text-gray-700">
                                        Email
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="email" name="company_website" id="company_website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                                    </div>
                                </div>
                            </div>

                            <div>
                            <label for="about" className="block text-sm font-medium text-gray-700">
                                About
                            </label>
                            <div className="mt-1">
                                <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Brief description for your profile. URLs are hyperlinked.
                            </p>
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <div className="mt-1 flex items-center">
                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                </span>
                                <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Change
                                </button>
                            </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
        </>
    )
}
