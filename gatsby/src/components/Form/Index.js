import React from "react"
import { navigate } from "@reach/router"
import { FaArrowRight } from 'react-icons/fa'

export default ({ handleSubmit, handleUpdate }) => (
  <div id="loginForm" className="w-screen flex flex-col justify-items-center mb-48">
    <form
      className="w-min my-4 self-center"
      method="post"
      onSubmit={event => {
        handleSubmit(event)
        navigate(`/app/profile`)
      }}
    >
      <p className="font-medium">
        Login
      </p>
      {/* <label className="block text-tiny uppercase">
        Username
        <input
          className="block text-tiny px-1"
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label> */}
      <div className="flex flex-row mt-6 space-x-6">
        <label className="inline text-tiny uppercase">
          <input
            className="block text-tiny p-4 bg-white border-black border-2 rounded-full hover:border-opacity-50 font-acuminPro"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleUpdate}
          />
        </label>
        <button className="inline" type="submit"><FaArrowRight className="w-7 h-7" /></button>
      </div>
    </form>
  </div>
)
