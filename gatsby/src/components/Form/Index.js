import React from "react"
import { navigate } from "@reach/router"

export default ({ handleSubmit, handleUpdate }) => (
  <div id="loginForm" className="w-screen">
    <form
      className="my-4"
      method="post"
      onSubmit={event => {
        handleSubmit(event)
        navigate(`/app/profile`)
      }}
    >
      <p>
        For this demo, please log in with the username <code>gatsby</code> and the
        password <code>alwaysrehearsing</code>.
      </p>
      <label className="block text-tiny uppercase">
        Username
        <input
          className="block text-tiny px-1"
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      <label className="block text-tiny uppercase">
        Password
        <input
          className="block text-tiny px-1"
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      <input className="bg-white border-2 border-black text-black text-small font-bold mt-2 py-1 px-4 cursor-pointer" type="submit" value="Log In" />
    </form>
  </div>
)
