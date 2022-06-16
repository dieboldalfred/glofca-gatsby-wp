import React from "react"

import "./contact-form.css"

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/f/xlezvvzj"
      method="POST"
      className="contact-form"
    >
      <label className="contact-form--label">Name</label>
      <input
        className="contact-form--input"
        type="text"
        name="name"
        id="name"
      />
      <label className="contact-form--label">Email</label>
      <input
        className="contact-form--input"
        type="email"
        name="email"
        id="email"
      />
      <label className="contact-form--label">Message</label>
      <textarea
        className="contact-form--input"
        name="message"
        id="message"
        rows="5"
      />
      <div className="contact-form--button-container">
        <button className="btn contact-form--submit" type="submit">
          Submit
        </button>
        <input className="btn contact-form--clear" type="reset" value="Clear" />
      </div>
    </form>
  )
}
export default ContactForm
