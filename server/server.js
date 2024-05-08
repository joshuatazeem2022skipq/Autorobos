const express = require("express");
const router1 = require("./Routes/router1");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

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

app.post("/send-email", (req, res) => {
  const { name, email, phone, subject, description } = req.body;

  const mailOptions = {
    from: "hr@autorobos.com",
    to: "hr@autorobos.com",
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Subject: ${subject}
      Description: ${description}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.use(router1);

app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  res.status(500).send("Internal Server Error");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
