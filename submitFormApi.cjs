// const mongoose = require('mongoose');
// const multer = require('multer');
// const express = require('express');
// const app = express();

// const cors = require('cors');
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/register', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('MongoDB connection error:', err));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage: storage });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.post('/submit-form', upload.single('file'), (req, res) => {
//   const { textInput, selectedOption } = req.body;
//   const file = req.file;

//   console.log('Received text input:', textInput);
//   console.log('Selected option:', selectedOption);
//   console.log('File:', file);

//   if (!textInput || !selectedOption || !file) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }



// });

// app.listen(3009, () => {
//   console.log('Server running on port 3009');
// });



const mongoose = require('mongoose');
require('dotenv').config();
const multer = require('multer');
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const path = require('path');

// Middleware to parse incoming data
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Ensure the upload directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Path where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename to prevent conflicts
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
  // fileFilter: (req, file, cb) => {
  //   const allowedMimeTypes = ['application/pdf', 'image/jpeg', 'image/png'];
  //   if (!allowedMimeTypes.includes(file.mimetype)) {
  //     return cb(new Error('Invalid file type. Only PDF, JPEG, and PNG are allowed.'));
  //   }
  //   cb(null, true);
  // }
});

// Form schema
const formSchema = new mongoose.Schema({
  aadharNumber: { type: String, required: true },
  panNumber: { type: String, required: true },
  selectedOption: { type: String, required: true },
  industryType: { type: String, required: true },
  companyCategory: { type: String, required: true },
  filePath: { type: String, required: true },
  companyMoa: { type: String, required: false },
  companyAoa: { type: String, required: false },
  companyCoi: { type: String, required: false },
  gstinCertificate: { type: String, required: false },
  companyPanCertificate: { type: String, required: false },
  utilityBillType: { type: String, required: false },
  utilityBillFile: { type: String, required: false },
  youOpt: { type: String, required: false }
});

const FormData = mongoose.model('FormData', formSchema);

// Endpoint to handle Aadhar OTP submission
app.post('/send-otp', (req, res) => {
  const { aadharNumber } = req.body;

  if (!aadharNumber) {
    return res.status(400).json({ message: 'Aadhar number is required' });
  }

  // Simulate OTP sending (replace with actual OTP logic if needed)
  console.log(`OTP sent to Aadhar number: ${aadharNumber}`);
  res.status(200).json({ message: 'OTP sent successfully' });
});

// Endpoint to handle Aadhar OTP verification
app.post('/verify-otp', (req, res) => {
  const { aadharNumber, otp } = req.body;

  if (!aadharNumber || !otp) {
    return res.status(400).json({ message: 'Aadhar number and OTP are required' });
  }

  // Simulate OTP verification (replace with actual verification logic)
  console.log(`OTP verified for Aadhar number: ${aadharNumber}`);
  res.status(200).json({ message: 'OTP verified successfully' });
});

// Endpoint to handle PAN verification
app.post('/verify-pan', (req, res) => {
  const { panNumber } = req.body;

  if (!panNumber) {
    return res.status(400).json({ message: 'PAN number is required' });
  }

  // Simulate PAN verification (replace with actual PAN verification logic)
  console.log(`PAN number verified: ${panNumber}`);
  res.status(200).json({ message: 'PAN verified successfully' });
});

// Post endpoint to handle form submission
app.post('/submit-form', upload.fields([
  { name: 'file', maxCount: 1 }, // General file upload
  { name: 'companyMoa', maxCount: 1 },  // Company MOA
  { name: 'companyAoa', maxCount: 1 },  // Company AOA
  { name: 'companyCoi', maxCount: 1 },  // Company COI
  { name: 'gstinCertificate', maxCount: 1 },      // GSTIN
  { name: 'companyPanCertificate', maxCount: 1 },  // Company PAN
  { name: 'utilityBillFile', maxCount: 1 }
]), (req, res) => {
  // Log the incoming data
  console.log('Request Body:', req.body);
  console.log('File Data:', req.files);

  const { aadharNumber, panNumber, selectedOption, industryType, companyCategory, utilityBillType, youOpt } = req.body;
  const file = req.files['file'] ? req.files['file'][0] : null;
  const companyMoa = req.files['companyMoa'] ? req.files['companyMoa'][0] : null;
  const companyAoa = req.files['companyAoa'] ? req.files['companyAoa'][0] : null;
  const companyCoi = req.files['companyCoi'] ? req.files['companyCoi'][0] : null;
  const gstinCertificate = req.files['gstin'] ? req.files['gstin'][0] : null;
  const companyPanCertificate = req.files['companyPan'] ? req.files['companyPan'][0] : null;
  const utilityBillFile = req.files['utilityBillFile'] ? req.files['utilityBillFile'][0] : null;

  // Check if the required fields are present
  if (!aadharNumber || !panNumber || !selectedOption || !industryType || !companyCategory || !utilityBillType || !youOpt) {
    console.log('Missing required fields');
    return res.status(400).json({ message: 'Missing required fields' });
  }
  if (!file || !companyMoa || !companyAoa || !companyCoi || !gstinCertificate || !companyPanCertificate || !utilityBillFile) {
    console.log('Missing required files');
    return res.status(400).json({ message: 'Missing required files' });
  }

  // Log to check the form data before saving
  console.log('Form Data:', {
    aadharNumber,
    panNumber,
    selectedOption,
    industryType,
    companyCategory,
    youOpt,
    filePath: file ? file.path : '',
    companyMoaPath: companyMoa ? companyMoa.path : '',
    companyAoaPath: companyAoa ? companyAoa.path : '',
    companyCoiPath: companyCoi ? companyCoi.path : '',
    gstinPath: gstinCertificate ? gstinCertificate.path : '',
    companyPanPath: companyPanCertificate ? companyPanCertificate.path : '',
    utilityBillFilePath: utilityBillFile ? utilityBillFile.path : ''
  });

  // Save the data to MongoDB
  const formData = new FormData({
    aadharNumber,
    panNumber,
    selectedOption,
    industryType,
    companyCategory,
    utilityBillType,
    youOpt,
    filePath: file ? file.path : '',
    companyMoa: companyMoa ? companyMoa.path : '',
    companyAoa: companyAoa ? companyAoa.path : '',
    companyCoi: companyCoi ? companyCoi.path : '',
    gstin: gstinCertificate ? gstinCertificate.path : '',
    companyPan: companyPanCertificate ? companyPanCertificate.path : '',
    utilityBillFile: utilityBillFile ? utilityBillFile.path : ''
  });

  formData.save()
    .then(() => {
      console.log('Data saved to database');
      res.status(200).json({ message: 'Form submitted successfully' });
    })
    .catch((err) => {
      console.log('Error saving data:', err);
      res.status(500).json({ message: 'Error saving data', error: err });
    });
});

// Start the server
app.listen(3009, () => {
  console.log('Server running on port 3009');
});
