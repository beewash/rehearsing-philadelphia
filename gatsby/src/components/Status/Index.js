import React from "react"
import { navigate } from "@reach/router"
import { isLoggedIn, logout } from "../../utils/auth"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <div className="mx-auto w-3/4 text-center">
        <h1>Artist Portal</h1>
      </div>
    )
  } else {

    details = (
      <div className="mx-auto w-3/4 text-center">
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

  return <div className="pt-32 pb-20">{details}</div>
}