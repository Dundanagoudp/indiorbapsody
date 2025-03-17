import React, { useState } from "react";
// import axios from "axios"; // Import axios for making HTTP requests
const axios = window.axios;

import {
  ContactContainer,
  ContactForm,
  FormGroup,
  FormInput,
  FormTextarea,
  FormButton,
  ErrorMessage,
  FormTitle,
} from "../contactsection/Contact.styles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.businessName)
      newErrors.businessName = "Business Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true); // Start submission
      try {
        // Prepare the data for the API
        const queryData = {
          designer_name: formData.name,
          buisness_name: formData.businessName,
          email: formData.email,
          phone_Number: formData.phone,
          Message: formData.message,
        };

        // Make a POST request to the API
        const response = await axios.post(
          "https://indigo-rhapsody-backend-ten.vercel.app/queries/queries",
          queryData
        );

        console.log("Query created successfully:", response.data);
        alert("Query submitted successfully!");

        // Reset the form after successful submission
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting query:", error);
        alert("Failed to submit query. Please try again.");
      } finally {
        setIsSubmitting(false); // End submission
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <ContactContainer>
      <FormTitle>Get In Touch</FormTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Designer name"
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormInput
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
          />
          {errors.businessName && (
            <ErrorMessage>{errors.businessName}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormInput
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <FormTextarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>

        <FormButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send"}
        </FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
