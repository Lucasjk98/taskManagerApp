import React from 'react'
import {Link, Switch, Route, Routes} from "react-router-dom"
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    console.log(e.target.elements) 

  }
  return (
<div>
<nav>
    <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/contact">Contact</Link></li>
    </ul>
</nav>
<form onSubmit={onSubmit} class= "contact-form" action="/action_page.php">
<div class="form-group">
  <label for="f-name">First Name:</label>
  <input type="text" class="form-control" id="f-name"/>
</div>
<div class="form-group">
  <label for="l-name">Last Name:</label>
  <input type="text" class="form-control" id="l-name"/>
</div>
<div class="form-group">
  <label for="phone">Phone Number:</label>
  <input class="form-control" id="phone"/>
</div>
<div class="form-group">
  <label for="Email">Email:</label>
  <input type="email" class="form-control" id="Email"/>
</div>
<div class="form-group">
  <label for="comment">Message:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
<button className="btn btn-danger" type="submit">
    {formStatus}
</button>
</form>
</div>
  )
}
export default ContactForm