
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const model = require('./model.cjs')
// require('./config.cjs')

// app.use(cors({
//     origin: "*",
// }))

// app.use(express.json())



// app.post('/upload', async(req,res)=>{
//     let data = new model(req.body)
//     let result = await data.save()
//     res.send(result)
// })

// app.listen(3005, ()=>{
//     console.log("App is Running on 3005 Port")
// })


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const model = require('./model.cjs');
// const nodemailer = require('nodemailer');
// require('./config.cjs');

// app.use(cors({
//     origin: "*",
// }));

// app.use(express.json());

// // Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Use your email provider, e.g., 'gmail', 'yahoo'
//     auth: {
//         user: 'info@indus-tech.co.in', // Replace with your email
//         pass: 'yyak pszf oslo fosg', // Replace with your email password
//     },
// });

// app.post('/upload', async (req, res) => {
//     const { yourname, email, password } = req.body;
//     try {
//         // Save data to the database
//         const data = new model(req.body);
//         const result = await data.save();

//         // Prepare email details
//         const mailOptions = {
//             from: 'info@indus-tech.co.in', // Your email address
//             to: email, // User's email address from the request
//             subject: 'Welcome to Our Platform!',
//             html: `
//                 <h1>Welcome, ${yourname}!</h1>
//         <p>Your account has been successfully created.</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Password:</strong> ${password}</p>
//         <p>
//             <a href="https://indus-tech.co.in/submit-form" style="padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">
//                 Go to Login
//             </a>
//         </p>
//             `,
//         };

//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//               console.error('Error sending email:', error);
//               return res.status(500).send({ message: 'Error sending email', error: error });
//             }
//             console.log('Email sent:', info.response); // Log the success response here
//           });
      
//           res.send(result); // Send the saved data back to the client
//         } catch (error) {
//           console.error('Error saving data:', error); // Log the error if any
//           res.status(500).send({ message: 'Error saving data or sending email', error: error });
//         }
// });

// app.listen(3005, () => {
//     console.log("App is Running on 3005 Port");
// });








const express = require('express');
const app = express();
const cors = require('cors');
const model = require('./model.cjs');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { body, validationResult } = require('express-validator');
dotenv.config();
require('./config.cjs');

// Middleware for security headers
app.use(helmet());

// Middleware for CORS (Restrict to trusted domains in production)
const corsOptions = {
    origin: (origin, callback) => {
        console.log("Request Origin:", origin); // Log the origin to debug
        if (process.env.ALLOWED_ORIGINS.split(',').includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'), false);
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'], // Allow OPTIONS method for preflight requests
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests
app.options('/upload', cors(corsOptions)); // This will handle the OPTIONS preflight request for /upload

app.use(express.json());

// Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail', // Or use another email service provider
    auth: {
        user: process.env.EMAIL, // Email from environment variable
        pass: process.env.EMAIL_PASSWORD, // Password from environment variable
    },
});

// Input validation and sanitization
const validateInput = [
    body('yourname').trim().escape().notEmpty().withMessage('Name is required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

app.post('/upload', validateInput, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { yourname, email, password } = req.body;
    try {
        // Save data to the database
        const data = new model(req.body);
        const result = await data.save();

        // Prepare email details
        const mailOptions = {
            from: 'info@indus-tech.co.in',
            to: email,
            subject: 'Welcome to Our Platform!',
            html: `
                <h1>Welcome, ${yourname}!</h1>
                <p>Your account has been successfully created.</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Password:</strong> ${password}</p>
                <p><a href="https://indus-tech.co.in/submit-form">Go to Login</a></p>
            `,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).send({ message: 'Error sending email', error });
            }
            console.log('Email sent:', info.response);
        });

        // Respond with the result
        res.send(result);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send({ message: 'Error saving data or sending email', error });
    }
});

// Set dynamic port for live environment or fallback to 3005
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});