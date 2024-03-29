import React from "react"
import { navigate } from "gatsby"
import Form from "./Form/Index"
import { handleLogin, isLoggedIn } from "../utils/auth"

class Login extends React.Component {
  state = {
    // username: ``,
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
    )
  }
}

export default Login