import React, { useState } from 'react';

const Form = () => {
  const [textInput, setTextInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Only get the first file selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data
    const formData = new FormData();
    formData.append("textInput", textInput);
    formData.append("selectedOption", selectedOption);
    if (file) {
      formData.append("file", file);
    }

    // Make an API request (Post data to the backend)
    fetch('http://localhost:3000/submit-form', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert('Form submitted successfully');
    })
    .catch(error => {
      alert('Error during form submission');
    });
  };

  return (
    <div>
      <h2>Create Your Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <div>
          <label>Enter your name:</label>
          <input
            type="text"
            value={textInput}
            onChange={handleTextInputChange}
            required
          />
        </div>

        {/* Dropdown/Select Box */}
        <div>
          <label>Select your preferred contact method:</label>
          <select value={selectedOption} onChange={handleSelectChange} required>
            <option value="">Select</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Text">Text</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label>Upload your resume:</label>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;