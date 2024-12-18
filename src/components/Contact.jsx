import React, { useState } from "react";
import InputField from "./shared/InputField.jsx";
import StarDivider from "./shared/StarDivider.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    comments: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value }); 
    validateField(id, value); 
  };

  const validateField = (field, value) => {
    let error = "";

    if (field === "fullName" && !/^[a-zA-Z\s]+$/.test(value)) {
      error = "Full name must only contain letters and spaces.";
    }

    if (
      field === "emailAddress" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      error = "Please enter a valid email address.";
    }

    if (
      field === "phoneNumber" &&
      !/^\+?[0-9]{1,4}?[-.\s]?[0-9]+[-.\s]?[0-9]+[-.\s]?[0-9]+$/.test(value)
    ) {
      error = "Please enter a valid phone number.";
    }

    if (field === "comment" && !/^.{1,500}$/.test(value)) {
      error = "Comments should not exceed 500 characters.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = Object.keys(formData).every(
      (key) => errors[key] === "" && formData[key] !== ""
    );
    if (isValid) {
      console.log("Form submitted", formData);
    }
  };

  return (
    <section className="text-center p-5" id="contact">
      <div className="container">
        <h2 className="title fw-bold mb-3 mt-5">CONTACT ME</h2>
        <StarDivider color="rgb(44, 62, 80)" />
        <form className="m-auto" onSubmit={handleSubmit}>
          <InputField
            id="fullName"
            type="text"
            placeholder="Your Full Name"
            labelText="Full name"
            value={formData.fullName}
            onChange={handleInputChange}
            errorMessage={errors.fullName}
          />
          <InputField
            id="emailAddress"
            type="email"
            placeholder="name@example.com"
            labelText="Email address"
            value={formData.emailAddress}
            onChange={handleInputChange}
            errorMessage={errors.emailAddress}
          />
          <InputField
            id="phoneNumber"
            type="tel"
            placeholder="Your Phone Number"
            labelText="Phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            errorMessage={errors.phoneNumber}
          />
          <InputField
            id="comments"
            type="text"
            placeholder="Your Comments"
            labelText="Comments"
            value={formData.comments}
            onChange={handleInputChange}
            errorMessage={errors.comments}/>
          <button
            type="submit"
            className="btn mt-3 btnSend p-3 fs-5 d-flex flex-column align-items-start"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
