import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './index.css';
import './App.css';
import logo from './logo.svg';

import LoginButton from './components/login_components/LoginButton'

function LoginPage({setAuthToken}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"></img>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to React Todo
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or &nbsp;
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              register an account
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 text-center rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 text-center rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 text-center focus:ring-indigo-500 border-gray-300 rounded" />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <Link to="/app/calendar" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
          </div>
        </div>

        <LoginButton />
        </form>

      </div>       
    </div>
  )
}

export default LoginPage
