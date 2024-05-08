const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());
const upload = multer();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: "hr@autorobos.com",
    pass: "Hr@12345",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

router.post("/api/sendEmail", upload.single("file"), async (req, res) => {
  const { name, email, phone, career } = req.body;
  const file = req.file;

  const mailOptions = {
    from: "hr@autorobos.com",
    to: "hr@autorobos.com",
    subject: `New Email Form Submission: ${career}`,
    html: `
             <p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Career: ${career}</p>
           `,
    attachments: file
      ? [{ filename: file.originalname, content: file.buffer }]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error(error);
  //     res.status(500).send("Error sending email");
  //   } else {
  //     console.log("Email sent: " + info.response);
  //     res.status(200).send("Email sent successfully");
  //   }
  // });
});

module.exports = router;
