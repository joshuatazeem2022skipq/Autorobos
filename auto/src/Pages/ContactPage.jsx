import React from "react";
import ContactSection from "../ContactUs/ContactUs";
import ContactInformation from "../ContactUs/ContactInformation";
// import ContactCards from "../ContactUs/ContactCard";
import ContactMap from "../ContactUs/ContactMap";
// import ContactForm from "../ContactUs/NewContactCard";

const ContactPage = () => {
  return (
    <>
      <ContactSection />
      {/* <ContactCards /> */}
      <ContactInformation />
      <ContactMap />
      {/* <ContactForm /> */}
    </>
  );
};

export default ContactPage;
