import React from "react"

import "./grievance-form.css"

const GrievanceForm = () => {
  return (
    <form method="post" action="#" className="contact-form">
      <label className="contact-form--label">1. Full Name</label>
      <input
        className="grievance-form--input"
        type="text"
        name="name"
        id="name"
      />

      <label className="grievance-form--label">2. Sex</label>
      <select id="sex" name="sex" className="contact-form--input">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label className="contact-form--label">3. Contact Information</label>
      <input
        className="grievance-form--input"
        type="text"
        name="email"
        id="email"
        placeholder="email"
      />
      <input
        className="grievance-form--input"
        type="text"
        name="phone"
        id="phone"
        placeholder="phone"
      />

      <label className="grievance-form--label">4. Category</label>
      <select id="category" name="category" className="contact-form--input">
        <option value="representative">
          representative of a person/community affected by the project
        </option>
        <option value="third">Third Party</option>
        <option value="other">Other</option>
      </select>

      <button className="btn contact-form--submit" type="submit">
        Submit
      </button>
      <input className="btn contact-form--clear" type="reset" value="Clear" />
    </form>
  )
}
export default GrievanceForm
