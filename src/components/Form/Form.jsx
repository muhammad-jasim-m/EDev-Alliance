import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";
import { useDarkMode } from "../../Context/Darkcontext";

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Support Team",
    from_email: "",
    phone_number: "",
    message: "",
  });

const [popup, setPopup] = useState(false);

const {darkMode} = useDarkMode();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_deb1xii", // Replace with your EmailJS Service ID
        "template_zcszwbq", // Replace with your Template ID
        formData,
        "UsYLDUeJOsuPvMxYG" // Replace with your Public Key
      )
      .then(
        (result) => {
          setPopup(true);
          console.log(result.text);
          setFormData({
            from_name: "",
            to_name: "Support Team",
            from_email: "",
            phone_number: "",
            message: "",
          })
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <>
    <div className="formmaindiv" id="Formsec" style={{background :darkMode ?"black":""}}>

<div className="hetquotate">
Get a Free Quote
</div>

<div className="formdivm">

<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        value={formData.from_name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        value={formData.from_email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone_number"
        placeholder="Your Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Message</button>
    </form>

</div>


{
    popup && <>
    <div className="popupdiv" style={{background :darkMode ?"black":"", border:"1px solid #636ae8"}}>
<div>
we have reciver you request we will let you know in 24 Hours.
</div>
<div>icon</div> 
</div>
    </>
}

    </div>
    
    
    </>
  );
};

export default GetQuoteForm;
