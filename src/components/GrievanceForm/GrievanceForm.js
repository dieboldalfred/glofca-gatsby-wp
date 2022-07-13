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
        placeholder="Please enter your full name"
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
        placeholder="Please enter your email"
      />
      <input
        className="grievance-form--input"
        type="text"
        name="phone"
        id="phone"
        placeholder="Please enter your phone"
      />
      <label className="grievance-form--label">4. Category</label>
      <select id="category" name="category" className="contact-form--input">
        <option value="representative">
          Representative of a person/community affected
        </option>
        <option value="third">Third Party</option>
        <option value="other">Other</option>
      </select>
      <label className="grievance-form--label">
        5. Location where grievance problem occurred or there is a need for
        improvement*(please specify the country, city/town/village or district):
      </label>
      <input
        className="grievance-form--input"
        type="text"
        name="location"
        id="location"
        placeholder="Please enter your location"
      />
      <label className="contact-form--label">
        6. Brief Description of Grievance or Inquiry
      </label>
      <textarea
        className="grievance-form--input"
        type="text"
        rows="10"
        name="textarea"
        id="textarea"
        placeholder="What happened? Whom did it
        happen to? What is the result of the problem? Are there any negative
        consequences of the project orrecommendations for improvement? What ways
        of solution would you propose?"
      ></textarea>
      <label className="contact-form--label">
        7. Please add any other information that you consider relevant,
        including supporting documents:
      </label>
      <input type="file" id="documents" name="documents"></input>

      <label className="grievance-form--label">
        8.Do you require your identity to be kept confidential?
      </label>
      <select
        id="confidentiality"
        name="confidentiality"
        className="contact-form--input"
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <button className="btn contact-form--submit" type="submit">
        Submit
      </button>
      <input className="btn contact-form--clear" type="reset" value="Clear" />
    </form>
  )
}
export default GrievanceForm
