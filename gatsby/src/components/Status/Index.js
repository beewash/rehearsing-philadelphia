import React from "react"
import { navigate } from "@reach/router"
import { isLoggedIn, logout } from "../../utils/auth"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <div className="mx-auto w-3/4 text-center mb-20">
        <h1>Artist Portal</h1>
      </div>
    )
  } else {

    details = (
      <div className="mx-auto w-3/4 text-center mb-20">
        <h1 className="mb-8">Artist Portal</h1>
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          <p>log out</p>
        </a>
      </div>
    )
  }

  return <div className="p-1 mt-32">{details}</div>
}