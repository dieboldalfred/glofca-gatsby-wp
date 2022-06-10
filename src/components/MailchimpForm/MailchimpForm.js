import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

// styles
import "./mailchimp-form.css"

const MailchimpForm = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const data = await addToMailchimp(email)
    if (data.result === "error") {
      handleError(data)
    }
    setSubmitted(true)
  }

  const handleError = data => {
    console.log(data.msg)
  }

  const handleChange = e => {
    setEmail(e.target.value)
  }

  return (
    <>
      <h3>Subscribe to Our Newsletter</h3>
      <form className="mailchimp-form">
        <div className="mailchimp-form--input-wrapper">
          <input
            className="mailchimp-form--input"
            type="email"
            name="email"
            id="mail"
            label="email-input"
            placeholder="Your e-mail address"
            onChange={handleChange}
          />
        </div>
        <button
          className="mailchimp-form--button btn"
          label="Submit"
          type="submit"
          onClick={() => handleSubmit()}
        >
          {submitted ? "Already Subscribed" : "Subscribe"}
        </button>
      </form>
      <p>Unsubscribe at any time</p>
    </>
  )
}

export default MailchimpForm
