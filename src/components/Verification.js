// import React, { useState } from 'react';

// const Verification = () => {
//   const [textInput, setTextInput] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [file, setFile] = useState(null);

//   const handleTextInputChange = (e) => {
//     setTextInput(e.target.value);
//   };

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]); // Only get the first file selected
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Form data
//     const formData = new FormData();
//     formData.append("textInput", textInput);
//     formData.append("selectedOption", selectedOption);
//     if (file) {
//       formData.append("file", file);
//     }

//     // Make an API request (Post data to the backend)
//     fetch('http://localhost:3009/submit-form', {
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => response.json())
//     .then(data => {
//       alert('Form submitted successfully');
//     })
//     .catch(error => {
//       alert('Error during form submission');
//       alert('Error during form submission: ' + error.message);
//     });
//   };

//   return (
//     <div>
//       <h2>Create Your Form</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Text Input */}
//         <div>
//           <label>Enter your name:</label>
//           <input
//             type="text"
//             value={textInput}
//             onChange={handleTextInputChange}
//             required
//           />
//         </div>

//         {/* Dropdown/Select Box */}
//         <div>
//           <label>Select your preferred contact method:</label>
//           <select value={selectedOption} onChange={handleSelectChange} required>
//             <option value="">Select</option>
//             <option value="Email">Email</option>
//             <option value="Phone">Phone</option>
//             <option value="Text">Text</option>
//           </select>
//         </div>

//         {/* File Upload */}
//         <div>
//           <label>Upload your resume:</label>
//           <input
//             type="file"
//             accept=".pdf,.docx,.txt"
//             onChange={handleFileChange}
//           />
//         </div>

//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Verification;









// import React, { useState } from 'react';

// const Verification = () => {
//     const [aadharNumber, setAadharNumber] = useState("");
//     const [otp, setOtp] = useState("");
//     const [isOtpSent, setIsOtpSent] = useState(false);
//     const [isOtpVerified, setIsOtpVerified] = useState(false);
//     const [panNumber, setPanNumber] = useState("");
//     const [isPanVerified, setIsPanVerified] = useState(false);
//     const [selectedOption, setSelectedOption] = useState("");
//     const [file, setFile] = useState(null);

//     const handleSelectChange = (e) => {
//         setSelectedOption(e.target.value);
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]); // Only get the first file selected
//     };

//     // Handle Aadhar OTP submission
//   const sendOtp = async () => {
//     try {
//       const response = await fetch("http://localhost:3009/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ aadharNumber }),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//         setIsOtpSent(true);
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async () => {
//     try {
//       const response = await fetch("http://localhost:3009/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ aadharNumber, otp }),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//         setIsOtpVerified(true);
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//     }
//   };

//   // Verify PAN number
//   const verifyPan = async () => {
//     try {
//       const response = await fetch("http://localhost:3009/verify-pan", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ panNumber }),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         alert(result.message);
//         setIsPanVerified(true);
//       } else {
//         alert(result.message);
//       }
//     } catch (error) {
//       console.error("Error verifying PAN:", error);
//     }
//   };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!isOtpVerified || !isPanVerified) {
//             alert("Please complete Aadhar and PAN verification before submitting.");
//             return;
//         }

//         // Form data
//         const formData = new FormData();
//         formData.append("aadharNumber", aadharNumber);
//         formData.append("panNumber", panNumber);
//         formData.append("selectedOption", selectedOption);
//         if (file) {
//             formData.append("file", file);
//         }

//         try {
//             const response = await fetch("http://localhost:3009/submit-form", {
//               method: "POST",
//               body: formData,
//             });
//             const result = await response.json();
//             if (response.ok) {
//               alert(result.message);
//             } else {
//               alert(result.message);
//             }
//           } catch (error) {
//             console.error("Error submitting form:", error);
//           }
//     };

//     return (
//         <div style={styles.formContainer}>
//             <h2 style={styles.formHeading}>Please Submit The Details</h2>
//             <form onSubmit={handleSubmit} style={styles.form}>
//                 {/* Text Input */}
//                 <div style={styles.inputGroup}>
//                     <label htmlFor="textInput" style={styles.inputLabel}>Enter your name:</label>
//                     <input
//                         id="textInput"
//                         type="text"
//                         value={textInput}
//                         onChange={handleTextInputChange}
//                         required
//                         style={styles.inputField}
//                     />
//                 </div>

//                 {/* Dropdown/Select Box */}
//                 <div style={styles.inputGroup}>
//                     <label htmlFor="contactMethod" style={styles.inputLabel}>Select your preferred contact method:</label>
//                     <select
//                         id="contactMethod"
//                         value={selectedOption}
//                         onChange={handleSelectChange}
//                         required
//                         style={styles.inputField}
//                     >
//                         <option value="">Select</option>
//                         <option value="Email">Email</option>
//                         <option value="Phone">Phone</option>
//                         <option value="Text">Text</option>
//                     </select>
//                 </div>

//                 {/* File Upload */}
//                 <div style={styles.inputGroup}>
//                     <label htmlFor="file" style={styles.inputLabel}>Upload your resume:</label>
//                     <input
//                         id="file"
//                         type="file"
//                         accept=".pdf,.docx,.txt"
//                         onChange={handleFileChange}
//                         style={styles.inputField}
//                     />
//                 </div>

//                 <div style={styles.buttonGroup}>
//                     <button type="submit" style={styles.submitButton}>Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// // Internal styles in JS
// const styles = {
//     formContainer: {
//         maxWidth: '600px',
//         margin: '80px auto',  // Added margin to create space between header and footer
//         padding: '50px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 1)',
//     },
//     formHeading: {
//         textAlign: 'center',
//         fontSize: '2rem',
//         color: '#5D2F8E', // Purple color
//         marginBottom: '30px',
//         fontWeight: 'bold',
//     },
//     inputGroup: {
//         marginBottom: '20px',
//     },
//     inputLabel: {
//         display: 'block',
//         fontSize: '1rem',
//         fontWeight: '600',
//         marginBottom: '5px',
//         color: '#5D2F8E', // Purple color
//     },
//     inputField: {
//         width: '100%',
//         padding: '12px',
//         fontSize: '1rem',
//         border: '1px solid #ccc',
//         borderRadius: '6px',
//         outline: 'none',
//         transition: 'border-color 0.3s',
//     },
//     inputFieldFocus: {
//         borderColor: '#5D2F8E',
//         boxShadow: '0 0 5px rgba(93, 47, 142, 0.5)',
//     },
//     submitButton: {
//         width: '100%',
//         padding: '14px',
//         fontSize: '1.1rem',
//         backgroundColor: '#5D2F8E', // Purple background
//         color: 'white',
//         border: 'none',
//         borderRadius: '6px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//     },
//     submitButtonHover: {
//         backgroundColor: '#471f6a', // Darker purple on hover
//     },
//     buttonGroup: {
//         textAlign: 'center',
//     },
//     '@media (max-width: 768px)': {
//         formContainer: {
//             padding: '40px',
//             maxWidth: '90%',  // Make the form container take up more space on smaller screens
//         },
//         formHeading: {
//             fontSize: '1.5rem', // Adjust heading size on smaller screens
//         },
//         inputField: {
//             fontSize: '0.9rem', // Slightly smaller input fields on smaller screens
//         },
//         submitButton: {
//             fontSize: '1rem', // Smaller submit button size
//         },
//     },

//     '@media (max-width: 480px)': {
//         formContainer: {
//             padding: '20px',
//             maxWidth: '100%',  // Full width on very small screens
//         },
//         formHeading: {
//             fontSize: '1.2rem', // Further reduce heading size
//         },
//         inputField: {
//             fontSize: '0.8rem', // Further reduce input field size
//         },
//         submitButton: {
//             fontSize: '0.9rem', // Further reduce button size
//         },
//     },
// };

// export default Verification;






import React, { useState } from 'react';

const Verification = () => {
    const [aadharNumber, setAadharNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [panNumber, setPanNumber] = useState("");
    const [isPanVerified, setIsPanVerified] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [industryType, setIndustryType] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [file, setFile] = useState(null);
    const [companyMoa, setCompanyMoa] = useState(null);
    const [companyAoa, setCompanyAoa] = useState(null);
    const [companyCoi, setCompanyCoi] = useState(null);
    const [gstinCertificate, setGstinCertificate] = useState(null);
    const [companyPanCertificate, setCompanyPanCertificate] = useState(null);
    const [utilityBillType, setUtilityBillType] = useState("");
    const [utilityBillFile, setUtilityBillFile] = useState(null);
    const [youOpt, setYouOpt] = useState("");

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Only get the first file selected
    };

    // Handle Aadhar OTP submission
    const sendOtp = async () => {
        try {
            const response = await fetch("http://localhost:3009/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ aadharNumber }),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                setIsOtpSent(true);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
        }
    };

    // Verify OTP
    const verifyOtp = async () => {
        try {
            const response = await fetch("http://localhost:3009/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ aadharNumber, otp }),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                setIsOtpVerified(true);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
        }
    };

    // Verify PAN number
    const verifyPan = async () => {
        try {
            const response = await fetch("http://localhost:3009/verify-pan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ panNumber }),
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                setIsPanVerified(true);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error verifying PAN:", error);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!aadharNumber || !panNumber || !isOtpVerified || !isPanVerified || !utilityBillType || !youOpt) {
            alert("Please complete Aadhar and PAN verification before submitting.");
            return;
        }

        if (!companyMoa || !companyAoa || !companyCoi || !gstinCertificate || !companyPanCertificate || !utilityBillFile) {
            alert("Please upload all required documents.");
            return;
        }

        console.log('Submitting form...');
        console.log('Aadhar:', aadharNumber, 'PAN:', panNumber,);

        // Form data
        const formData = new FormData();
        formData.append("aadharNumber", aadharNumber);
        formData.append("panNumber", panNumber);
        formData.append("selectedOption", selectedOption);
        formData.append("industryType", industryType);
        formData.append("selectedCategory", selectedCategory);
        if (file) {
            formData.append("file", file);
            if (companyMoa) formData.append("companyMoa", companyMoa);
            if (companyAoa) formData.append("companyAoa", companyAoa);
            if (companyCoi) formData.append("companyCoi", companyCoi);
            if (gstinCertificate) formData.append("gstinCertificate", gstinCertificate);
            if (companyPanCertificate) formData.append("companyPanCertificate", companyPanCertificate);
            if (utilityBillFile) formData.append("utilityBillFile", utilityBillFile);
            formData.append("utilityBillType", utilityBillType);
            formData.append("youOpt", youOpt);

            try {
                const response = await fetch("http://localhost:3009/submit-form", {
                    method: "POST",
                    body: formData,
                });
                const result = await response.json();
                console.log(result);
                if (response.ok) {
                    alert(result.message);
                } else {
                    alert(result.message);
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        };
    };

    return (
        <div style={styles.formContainer}>
            <h2 style={styles.formHeading}>Merchant KYC</h2>
            <h3 style={styles.subHeading}>Director KYC</h3>
            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Aadhar Input */}
                <div style={styles.inputGroup}>
                    <label htmlFor="aadharNumber" style={styles.inputLabel}>Aadhar Number: <span style={styles.asterisk}>*</span></label>
                    <input
                        id="aadharNumber"
                        type="text"
                        value={aadharNumber}
                        onChange={(e) => setAadharNumber(e.target.value)}
                        maxLength={12}
                        required
                        style={styles.inputField}
                    />
                    <button
                        type="button"
                        onClick={sendOtp}
                        disabled={isOtpSent}
                        style={styles.verifyButton}
                    >
                        Send OTP
                    </button>
                </div>
                {isOtpSent && (
                    <div style={styles.inputGroup}>
                        <label htmlFor="otp" style={styles.inputLabel}>Enter OTP:</label>
                        <input
                            id="otp"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            style={styles.inputField}
                        />
                        <button
                            type="button"
                            onClick={verifyOtp}
                            style={styles.verifyButton}
                        >
                            Verify OTP
                        </button>
                    </div>
                )}

                {/* PAN Input */}
                <div style={styles.inputGroup}>
                    <label htmlFor="panNumber" style={styles.inputLabel}>PAN Number: <span style={styles.asterisk}>*</span></label>
                    <input
                        id="panNumber"
                        type="text"
                        value={panNumber}
                        onChange={(e) => setPanNumber(e.target.value)}
                        maxLength={10}
                        required
                        style={styles.inputField}
                    />
                    <button
                        type="button"
                        onClick={verifyPan}
                        style={styles.verifyButton}
                    >
                        Verify PAN
                    </button>
                </div>

                {/* Dropdown/Select Box */}
                <div style={styles.inputGroup}>
                    <label htmlFor="contactMethod" style={styles.inputLabel}>Select your preferred contact method:</label>
                    <select
                        id="contactMethod"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        required
                        style={styles.inputField}
                    >
                        <option value="">Select</option>
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="Text">Text</option>
                    </select>
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="industryType" style={styles.inputLabel}>
                        Select Industry Type: <span style={styles.asterisk}>*</span>
                    </label>
                    <select
                        id="industryType"
                        value={industryType}
                        onChange={(e) => setIndustryType(e.target.value)}
                        required
                        style={styles.inputField}
                    >
                        <option value="">Select</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Retail">Retail</option>
                        <option value="Technology">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Finance</option>
                        <option value="Construction">Construction</option>
                        <option value="Education">Education</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Company Category Dropdown */}
                <div style={styles.inputGroup}>
                    <label htmlFor="companyCategory" style={styles.inputLabel}>
                        Select Company Category: <span style={styles.asterisk}>*</span>
                    </label>
                    <select
                        id="companyCategory"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        required
                        style={styles.inputField}
                    >
                        <option value="">Select</option>
                        <option value="Private Limited">Private Limited</option>
                        <option value="Public Limited">Public Limited</option>
                        <option value="Sole Proprietorship">Sole Proprietorship</option>
                        <option value="Partnership">Partnership</option>
                        <option value="LLP">Limited Liability Partnership (LLP)</option>
                    </select>
                </div>

                {selectedCategory && (
                    <>
                        <h3 style={styles.subHeading}>Company KYC</h3>
                        <div style={styles.inputGroup}>
                            <label htmlFor="companyMoa" style={styles.inputLabel}>Upload MOA: <span style={styles.asterisk}>*</span></label>
                            <input
                                id="companyMoa"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(e, setCompanyMoa)}
                                style={styles.inputField}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="companyAoa" style={styles.inputLabel}>Upload AOA: <span style={styles.asterisk}>*</span></label>
                            <input
                                id="companyAoa"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(e, setCompanyAoa)}
                                style={styles.inputField}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="companyCoi" style={styles.inputLabel}>Upload COI: <span style={styles.asterisk}>*</span></label>
                            <input
                                id="companyCoi"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(e, setCompanyCoi)}
                                style={styles.inputField}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="gstinCertificate" style={styles.inputLabel}>Upload GSTIN Certificate: <span style={styles.asterisk}>*</span></label>
                            <input
                                id="gstinCertificate"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(e, setGstinCertificate)}
                                required
                                style={styles.inputField}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="companyPanCertificate" style={styles.inputLabel}>Upload Company PAN Certificate: <span style={styles.asterisk}>*</span></label>
                            <input
                                id="companyPanCertificate"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(e, setCompanyPanCertificate)}
                                required
                                style={styles.inputField}
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="utilityBillType" style={styles.inputLabel}>
                                Select Utility Bill Type: <span style={styles.asterisk}>*</span>
                            </label>
                            <select
                                id="utilityBillType"
                                value={utilityBillType}
                                onChange={(e) => setUtilityBillType(e.target.value)}
                                style={styles.inputField}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Electricity Bill">Electricity Bill</option>
                                <option value="House Rent">House Rent</option>
                                <option value="Telephone Bill">Telephone Bill</option>
                            </select>
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="utilityBillFile" style={styles.inputLabel}>
                                Upload Utility Bill ({utilityBillType}): <span style={styles.asterisk}>*</span>
                            </label>
                            <input
                                id="utilityBillFile"
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(e, setUtilityBillFile)}
                                style={styles.inputField}
                                required
                            />
                        </div>
                        <div style={styles.inputGroup}>
                            <label htmlFor="youOpt" style={styles.inputLabel}>
                                Opt for? (Choose one): <span style={styles.asterisk}>*</span>
                            </label>
                            <select
                                id="youOpt"
                                value={youOpt}
                                onChange={(e) => setYouOpt(e.target.value)}
                                required
                                style={styles.inputField}
                            >
                                <option value="">Select</option>
                                <option value="Both">Both</option>
                                <option value="Payin">Payin</option>
                                <option value="Payout">Payout</option>
                            </select>
                        </div>

                    </>
                )}

                {/* File Upload */}
                <div style={styles.inputGroup}>
                    <label htmlFor="file" style={styles.inputLabel}>Upload your resume:</label>
                    <input
                        id="file"
                        type="file"
                        accept=".pdf,.docx,.txt"
                        onChange={handleFileChange}
                        style={styles.inputField}
                    />
                </div>
                {console.log('isOtpVerified:', isOtpVerified, 'isPanVerified:', isPanVerified)}
                {/* Submit */}
                <div style={styles.buttonGroup}>
                    <button
                        type="submit"
                        style={styles.submitButton}
                        disabled={!isOtpVerified || !isPanVerified}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

// Internal styles in JS
// const styles = {
//     formContainer: {
//         maxWidth: '600px',
//         margin: '80px auto',
//         padding: '50px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     },
//     formHeading: {
//         textAlign: 'center',
//         fontSize: '2rem',
//         color: '#5D2F8E',
//         marginBottom: '20px',
//     },
//     subHeading: {
//         textAlign: 'left',
//         fontSize: '1.2rem',
//         color: '#333',
//         marginBottom: '30px',
//     },
//     inputGroup: {
//         marginBottom: '20px',
//     },
//     inputLabel: {
//         display: 'block',
//         fontSize: '1rem',
//         fontWeight: '600',
//         marginBottom: '5px',
//         color: '#5D2F8E',
//     },
//     inputField: {
//         width: '100%',
//         padding: '12px',
//         fontSize: '1rem',
//         border: '1px solid #ccc',
//         borderRadius: '6px',
//         outline: 'none',
//         transition: 'border-color 0.3s',
//     },
//     verifyButton: {
//         marginTop: '10px',
//         padding: '10px 15px',
//         backgroundColor: '#5D2F8E',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     submitButton: {
//         width: '100%',
//         padding: '14px',
//         fontSize: '1.1rem',
//         backgroundColor: '#5D2F8E',
//         color: 'white',
//         border: 'none',
//         borderRadius: '6px',
//         cursor: 'pointer',
//     },
//     buttonGroup: {
//         textAlign: 'center',
//     },
// };
const styles = {
    formContainer: {
        width: '100%',
        padding: '50px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
    },
    formHeading: {
        textAlign: 'center',
        fontSize: '2rem',
        color: '#5D2F8E',
        marginBottom: '20px',
        marginTop: '50px'
    },
    subHeading: {
        textAlign: 'left',
        fontSize: '1.2rem',
        color: '#333',
        marginBottom: '30px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '48%',
        marginBottom: '20px',
    },
    inputLabel: {
        display: 'block',
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: '5px',
        color: '#5D2F8E',
    },
    inputField: {
        width: '100%',
        padding: '12px',
        fontSize: '1rem',
        border: '1px solid #ccc',
        borderRadius: '6px',
        outline: 'none',
        transition: 'border-color 0.3s',
    },
    asterisk: {
        color: 'red',
        marginLeft: '5px',
    },
    verifyButton: {
        marginTop: '10px',
        padding: '10px 15px',
        backgroundColor: '#5D2F8E',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    submitButton: {
        width: '100%',
        padding: '14px',
        fontSize: '1.1rem',
        backgroundColor: '#5D2F8E',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    buttonGroup: {
        textAlign: 'center',
    },
    '@media (max-width: 768px)': {
        form: {
            flexDirection: 'column',
            alignItems: 'stretch',
        },
        inputGroup: {
            width: '100%',
        },
    }
};



export default Verification;
