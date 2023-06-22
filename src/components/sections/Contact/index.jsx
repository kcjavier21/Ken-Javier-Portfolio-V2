import React, { Component } from "react"
import { toast } from "react-toastify"
import Joi from "joi-browser"
import "../../../../node_modules/react-toastify/dist/ReactToastify.css"
import emailjs from "emailjs-com"

// @ts-ignore
import * as styles from "./styles/css/contact.module.css"

// ======= DATA ========
import {
  socialMediaLinks,
  basicContactDetails,
} from "../../../assets/data/socialMediaLinks"

toast.configure()

export default class Contact extends Component {
  state = {
    contact: {
      name: "",
      email: "",
      contactNumber: "",
      company: "",
      message: "",
    },
  }

  schema = {
    name: Joi.string().required().label("First name"),
    email: Joi.string().email().required().label("Email"),
    contactNumber: Joi.string().required().label("Contact number"),
    company: Joi.string().required().label("Company or organization"),
    message: Joi.string().required().label("Message"),
  }

  validate = () => {
    const result = Joi.validate(this.state.contact, this.schema, {
      abortEarly: false,
    })
    return result != null ? result : null
  }

  resetState = () => {
    let contact = { ...this.state.contact }
    contact.name = ""
    contact.email = ""
    contact.contactNumber = ""
    contact.company = ""
    contact.message = ""
    this.setState({ contact })
  }

  sendEmail = e => {
    e.preventDefault()
    console.log(e.target)

    let result = this.validate()

    if (result.error != null) {
      console.log(result)
      toast.error(result.error.details[0].message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      })
      return
    }

    emailjs
      .sendForm(
        "service_jrjyptd",
        "template_kenjavier",
        e.target,
        "user_CCaTeZZghXzAEj0VhC8VU"
      )
      .then(
        result => {
          console.log(result.text)
          toast.success("Email Sent!", {
            className: "custom-toast",
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          })

          this.resetState()
        },
        error => {
          console.log(error.text)
          toast.error("Error sending email!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          })
        }
      )
  }

  handleChange = e => {
    let contact = { ...this.state.contact }
    contact[e.currentTarget.name] = e.currentTarget.value
    this.setState({ contact })
  }

  inputs = [
    { value: "name", placeHolder: "Name" },
    { value: "email", placeHolder: "Email" },
    { value: "contactNumber", placeHolder: "Phone Number" },
    { value: "company", placeHolder: "Company or organization" },
  ]

  render() {
    return (
      <div className={styles.contact}>
        <h1>Keep In Touch</h1>

        <div className={styles.formAndDetailsContainer}>
          <form
            onSubmit={this.sendEmail}
            className={styles.form}
            autoComplete="off"
          >
            {this.inputs.map(item => (
              <input
                value={this.state.contact[item.value]}
                onChange={this.handleChange}
                type="text"
                name={item.value}
                key={item.value}
                placeholder={item.placeHolder}
              />
            ))}

            <textarea
              value={this.state.contact.message}
              onChange={this.handleChange}
              name="message"
              id="message"
              placeholder="Message"
            />

            <input
              type="submit"
              id="submit-btn"
              className={styles.submitBtn}
              value="Send"
            />
          </form>

          <div className={styles.contactDetails}>
            <div className={styles.basicDetails}>
              {basicContactDetails.map(item => (
                <div className={styles.basicDetail} key={item.name}>
                  <img src={item.image.default} alt={item.name} />
                  <p>{item.details}</p>
                </div>
              ))}
            </div>
            <div className={styles.socialLinks}>
              <h3>Social Links</h3>

              <div className={styles.socialButtons}>
                {socialMediaLinks.map(item => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.site}
                  >
                    <img
                      src={item.image2.default}
                      alt={`Ken Javier on ${item.site}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
