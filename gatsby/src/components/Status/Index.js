import React from "react"
import { Link, navigate } from "@reach/router"
import { getCurrentUser, isLoggedIn, logout } from "../../utils/auth"

export default () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p className="mx-auto w-3/4 p-1 text-white text-center">
        To get the full app experience, you’ll need to
        {` `}
        <Link to="/app/login">log in</Link>.
      </p>
    )
  } else {
    const { name, email } = getCurrentUser()

    details = (
      <p className="mx-auto w-3/4 p-1 text-white text-center">
        Logged in as {name} ({email}
        )!
        {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          log out
        </a>
      </p>
    )
  }

  return <div className="bg-black p-1">{details}</div>
}