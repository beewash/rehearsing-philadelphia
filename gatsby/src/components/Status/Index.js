import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <div className="mx-auto w-3/4 text-center mb-20">
        <h1>Artist Portal</h1>
      </div>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <div className="mx-auto w-3/4 text-center mb-20">
        <h1>Artist Portal</h1>
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          log out
        </a>
      </div>
    )
  }

  return <div className="p-1 mt-32">{details}</div>
}