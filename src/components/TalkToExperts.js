import React, {useState} from 'react';
import emailjs from "@emailjs/browser";

const TalkToExperts = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city:"",
        message: ""
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`${name}: ${value}`);
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handelQuerySubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Before Sending:", formData);

        emailjs
        .send(
          "service_1uqy3uw",
          "template_tzm0oxn",
          formData,
          "bb5-fCrdgOphgHy-2"
        )
        .then(
            (response) => {
              alert("Query sent successfully!");
              // Clear the form after successful submission
              setFormData({
                name: "",
                email: "",
                phone: "",
                city:"",
                message: ""
              });
              // Close the form
            //   closeForm();
            },
            (error) => {
              console.error("Emailjs error:", error);
              alert("Failed to send query. Please try again.");
            }
          );
      };  

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '50px',
      paddingTop: '100px',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      flex: 1,
      paddingRight: '20px',
      zIndex: 1,
    },
    heading: {
      fontSize: '2.8rem',
      fontWeight: '700',
      color: '#343a40',
      marginBottom: '20px',
      lineHeight: '1.2',
    },
    text: {
      fontSize: '1.2rem',
      color: '#495057',
      lineHeight: '1.6',
    },
    formContainer: {
      flex: 1,
      zIndex: 1,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      maxWidth: '450px',
      margin: 'auto',
    },
    formTitle: {
      fontSize: '1.8rem',
      fontWeight: '600',
      color: '#6f42c1',
      marginBottom: '20px',
      textAlign: 'center',
    },
    input: {
      marginBottom: '15px',
      padding: '15px',
      border: '1px solid #ced4da',
      borderRadius: '10px',
      fontSize: '1rem',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
      transition: 'box-shadow 0.3s ease',
    },
    inputFocus: {
      boxShadow: '0 0 6px rgba(0, 123, 255, 0.5)',
    },
    textarea: {
      marginBottom: '15px',
      padding: '15px',
      border: '1px solid #ced4da',
      borderRadius: '10px',
      fontSize: '1rem',
      height: '100px',
      resize: 'none',
    },
    button: {
      padding: '15px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#ffffff',
      backgroundColor: '#6f42c1',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    backgroundAnimation: {
      position: 'absolute',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%',
      background: 'radial-gradient(circle, rgb(207 202 97 / 50%), rgba(40, 167, 69, 0) 70%)',
      animation: '10s linear 0s infinite normal none running rotate ',
      zIndex: 0,
    },
    '@keyframes rotate': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Talk to Our Experts</h1>
        <p style={styles.text}>
          Get personalized guidance from our experts to help you make the best decisions for your business. We’re here to assist with tailored solutions for your needs.
        </p>
      </div>
      <div style={styles.formContainer}>
        <form style={styles.form} onSubmit={handelQuerySubmit}>
          <h2 style={styles.formTitle}>Contact Us</h2>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            onFocus={(e) => (e.target.style.boxShadow = styles.inputFocus.boxShadow)}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
            name="name" 
            id="queryName" 
            onChange={handleInputChange} 
            value={formData.name}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            onFocus={(e) => (e.target.style.boxShadow = styles.inputFocus.boxShadow)}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
            name="email" 
            id="queryEmail" 
            onChange={handleInputChange} 
            value={formData.email}
            required
          />
          <input
            type="tel"
            placeholder="Your Mobile"
            style={styles.input}
            onFocus={(e) => (e.target.style.boxShadow = styles.inputFocus.boxShadow)}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
            name="phone" 
            id="queryPhone" 
            onChange={handleInputChange} 
            value={formData.phone}
            required
          />
          <input
            type="text"
            placeholder="Your City"
            style={styles.input}
            onFocus={(e) => (e.target.style.boxShadow = styles.inputFocus.boxShadow)}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
            name="city" 
            id="queryCity" 
            onChange={handleInputChange} 
            value={formData.city}
            required
          />
          <textarea
            placeholder="How can we help you?"
            style={styles.textarea}
            onFocus={(e) => (e.target.style.boxShadow = styles.inputFocus.boxShadow)}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
            name="message" 
            id="queryMessage" 
            onChange={handleInputChange} 
            value={formData.message}
            required
          ></textarea>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Submit
          </button>
        </form>
      </div>
      <div style={styles.backgroundAnimation}></div>
    </div>
  );
};

export default TalkToExperts;
