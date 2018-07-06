import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import './Login.css'

import auth from '../../services/auth'

class Home extends Component {
  constructor (props) {
    super(props)

    auth.logout()

    this.state = {
      email: '',
      password: '',
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()

    this.setState({submitted: true})
    const {email, password} = this.state
    auth.login(email, password)
  }

  render () {
    return (
      <div id='content' className='form-container'>
        <Form className='login-form' onSubmit={this.handleSubmit}>
          <FormGroup>
            <h2>Login</h2>
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail'>Email</Label>
            <Input type='email' required name='email' value={this.state.email} onChange={this.handleChange} />
            <FormFeedback>Bad email format</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for='exampleEmail'>Password</Label>
            <Input type='password' required name='password' value={this.state.password} onChange={this.handleChange} />
            <FormFeedback>Sweet! that name is available</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Button color='primary' type='submit'>Login</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Home
