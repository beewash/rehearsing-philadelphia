import React from "react"
import { getCurrentUser } from "../utils/auth"

const Profile = () => {
  const { name } = getCurrentUser()

  return (
    <>
      <p>Welcome back to your profile, {name}!</p>
      <p>
        This is a client-only route. You could set up a form to save information
        about a user here.
      </p>
    </>
  )
}

export default Profile