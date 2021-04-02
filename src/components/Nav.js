import logo from './../logo.svg';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Auth } from 'aws-amplify';

const Nav = () => {
    // displayed username
    const [username, setUsername] = useState('')

    //fetch user information
    useEffect(() => {
        const fetchUser = async () => {
            const { attributes } = await Auth.currentAuthenticatedUser();
            console.log(attributes)
            console.log(attributes.sub)
            setUsername(attributes.preferred_username)
        }
        fetchUser()
    })

    // logout
    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    
    return (
        <nav className="flex bg-gray-800 items-center">
            <div className="flex w-full">
                <div className="flex items-center justify-between h-14 w-full">
                    <div className="flex items-center max-h-10 w-full">
                        <div className="flex ml-4">
                            <img className="App-logo h-12 w-12" src={logo} alt="logo"></img>
                        </div> 
                        <div className=" ">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a> */}
                                <Link to="/app/tasks" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tasks</Link>
                                <Link to="/app/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
                                <Link to="/app/calendar" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</Link>
                            </div>
                        </div>
                    </div>

                    <div className=" ">
                        <div className="ml-4 mr-5 flex items-center gap-4">
                             <div className="text-gray-300 text-sm font-medium bg-gray-700 rounded-md px-3 py-2 select-none">{username}</div>
                             <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                             </button>
                             <Link to="/" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={signOut}>
                                <span className="sr-only">Logout</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                             </Link>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Nav
