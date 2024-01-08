import React, { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
//Form, Input, TextArea, and Button are components from the Semantic UI React library for building forms.
import emailjs from "emailjs-com";
//emailjs is a library for sending emails using JavaScript.
import Swal from "sweetalert2";
//Swal is an external library for displaying pop-up alerts (SweetAlert2).
import "./Contact.css";
import { validateEmail } from "../utils/Email Validate/helpers";

//EmailJS
///Constant that stores the required IDs for sending emails via the EmailJS Service
const TEMPLATE_ID = "template_ub3n2dw";
const USER_ID = "yoUzBk9YUpe6gk0d9";
const SERVICE_ID = "service_543sh2p";

export default function Contact() {
  //Define states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submission, setSubmission] = useState("");
  const [userLocation, setLocation] = useState("");

  const checkClick = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(inputType);
    if (userLocation === "") {
    }
  };

  //Function to handle when input is changed
  //Checks if input is empty and calls error message if required
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      if (inputValue === "") {
        return setErrorMessage("cannot be empty"), setEmail("");
      } else {
        setEmail(inputValue);
      }
    }
    if (inputType === "name") {
      if (inputValue === "") {
        return setErrorMessage("Please include your name"), setName("");
      } else {
        setName(inputValue);
      }
    }
    if (inputType === "message") {
      if (inputValue === "") {
        return (
          setErrorMessage("Please include a message, thanks"), setMessage("")
        );
      } else {
        setMessage(inputValue);
      }
    }
    setErrorMessage("");
    setSubmission("");
  };

  //Handle when form is submitted
  const handleFormSubmit = (e) => {
    //prevent default on form
    e.preventDefault();
//Checks if email is valid and returns a error message if not
    if (!validateEmail(email)) {
      setErrorMessage("Error! Email is invalid, please try again");
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    //Alerts user after successful message sent
    setSubmission(`Thanks for your email ${name}. I'll be in contact 👍`);

    setName("");
    setMessage("");
    setErrorMessage("");
    setEmail("");
  };
  const checkName = (event) => {
    console.log(event.target.value);
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputValue.length < 1) {
      setErrorMessage(`${inputType} cannot be empty`);
    }
  };
  //Form here to handle name and message using emailjs
  return (
    <section id="contact">
    <div className="contact-text">
      <div className="title-boarder rounded-circle">
        <h1>Contact Me</h1>
      </div>
      <div className="App">
        <h3>{submission}</h3>

        <Form className="contact-bg" onSubmit={handleFormSubmit}>
          <Form.Field
            id="form-input-control-last-name"
            value={name}
            name="name"
            control={Input}
            onBlur={checkName}
            onChange={handleInputChange}
            label="Name"
            type="text"
            onClick={checkClick}
            placeholder="Name..."
            required
            icon="user circle"
            iconPosition="left"
          />

          <Form.Field
            id="form-input-control-email"
            value={email}
            control={Input}
            name="email"
            onBlur={checkName}
            label="Email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            required
            icon="mail"
            iconPosition="left"
          />

          <TextArea
            id="form-textarea-control-opinion "
            rows="8"
            value={message}
            onBlur={checkName}
            name="message"
            label="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message here"
            required
          />
          <button className="submit-button mt-2" type="submit ">
            Submit
          </button>
        </Form>
        {errorMessage && (
          <div>
            <p className="error-text p-2 error-display mt-2">{errorMessage}</p>
          </div>
        )}
      </div>
      <div className="contact-details">
          {/* All links open in a new tab */}
          {/* <a href="tel:+9999999999" className="contact-button">
            <i className="fas fa-phone"></i> Phone
          </a> */}
          <a
            href="https://www.linkedin.com/in/peter-pan-3bb0432a9/"
            className="contact-button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>{" "}
          <a href="mailto:guaranstone@gmail.com" className="contact-button">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a
            href="https://github.com/HuiPan-Peter"
            className="contact-button"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
    </div>
    </section>
  );
}
