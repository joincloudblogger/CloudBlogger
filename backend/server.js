const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const Razorpay = require('razorpay');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Ping GET endpoint
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// GET endpoint to test if server is running
app.get('/', (req, res) => {
  res.json({ message: 'CloudBlogger API is running!' });
});

// GET endpoint to test API health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

// GET endpoint to test if server is running
app.get('/', (req, res) => {
  res.json({ message: 'CloudBlogger API is running!' });
});

// GET endpoint to test API health
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is healthy' });
});

// POST endpoint to receive form data and send email
app.post('/api/send-demo-email', async (req, res) => {
  const { user_name, user_email, user_phone, preferred_date } = req.body;

  // Format preferred_date if present
  let dateLine = '';
  if (preferred_date) {
    dateLine = `Preferred Date: ${preferred_date}\n`;
  }

  // Configure your SMTP transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to admin (plain text)
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Demo Booking',
    text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\n${dateLine}`,
  };

  // Confirmation email to user (HTML, text only, personalized)
  const userMailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: user_email,
    subject: 'Demo Booking Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <p>Hello ${user_name},</p>
        <p>Thank you for booking a demo with us!<br>
        We've received your request and will be in touch shortly to schedule the session.<br>
        Looking forward to connecting with you soon.</p>
        <br>
        <p>Best Regards,<br>
        <b>Salman Shaik | Accounts Manager</b><br>
        Cloud Blogger</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  await transporter.sendMail(userMailOptions);
  res.status(200).json({ message: 'Email sent successfully' });
});

// POST endpoint to receive consultation form data and send emails
app.post('/api/consultation', async (req, res) => {
  const { first_name, last_name, user_email, phone_number, preferred_course } = req.body;

  // Configure your SMTP transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email to admin (plain text)
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Consultation Request',
    text: `Name: ${first_name} ${last_name}\nEmail: ${user_email}\nPhone: ${phone_number}\nPreferred Course: ${preferred_course || 'Not specified'}`,
  };

  // Confirmation email to user (HTML, text only, personalized)
  const userMailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: user_email,
    subject: 'Consultation Request Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <p>Hello ${first_name},</p>
        <p>Thank you for requesting a consultation with us!<br>
        We've received your request and will be in touch shortly to schedule the session.<br>
        <b>Phone:</b> ${phone_number}<br>
        Looking forward to connecting with you soon.</p>
        <br>
        <p>Best Regards,<br>
        <b>Salman Shaik | Accounts Manager</b><br>
        Cloud Blogger</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  await transporter.sendMail(userMailOptions);
  res.status(200).json({ message: 'Consultation email sent successfully' });
});

// Endpoint to create Razorpay order
app.post('/api/create-order', async (req, res) => {
  const { amount, currency = 'INR', receipt } = req.body;
  const order = await razorpay.orders.create({
    amount: amount * 100, // amount in paise
    currency,
    receipt,
  });
  res.json(order);
});

app.post('/api/enroll-now-confirm', async (req, res) => {
  const { user_name, user_email, user_phone, preferred_course, payment_id, order_id } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Enrollment (Payment Successful)',
    text: `Name: ${user_name}\nEmail: ${user_email}\nPhone: ${user_phone}\nPreferred Course: ${preferred_course || 'Powerful Devops Course'}\nPayment ID: ${payment_id}\nOrder ID: ${order_id}`,
  };

  const userMailOptions = {
    from: 'joincloudblogger@gmail.com',
    to: user_email,
    subject: 'Enrollment & Payment Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; color: #222;">
        <p>Hello ${user_name},</p>
        <p>Thank you for enrolling and completing your payment!</p>
        <p><b>Payment Details:</b><br>
        Payment ID: <b>${payment_id}</b><br>
        Order ID: <b>${order_id}</b></p>
        <p>We've received your request and payment. We will be in touch shortly to schedule your session.<br>
        Looking forward to connecting with you soon.</p>
        <br>
        <p>Best Regards,<br>
        <b>Salman Shaik | Accounts Manager</b><br>
        Cloud Blogger</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  await transporter.sendMail(userMailOptions);
  res.status(200).json({ message: 'Enrollment and payment confirmation email sent successfully' });
});

// POST endpoint for brochure download request
app.post('/api/brochure-request', async (req, res) => {
  const { name, mobile } = req.body;
  if (!name || !mobile) {
    return res.status(400).json({ message: 'Name and mobile are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Brochure Downloaded',
    text: `Name: ${name}\nMobile: ${mobile}`,
  };

  await transporter.sendMail(mailOptions);
  res.status(200).json({ message: 'Admin notified. Proceed to download.' });
});

// Serve brochure with correct filename for all browsers
app.get('/api/download-brochure', (req, res) => {
  const filePath = path.join(__dirname, '../public/CloudBlogger-Brochure.pdf');
  res.download(filePath, 'CloudBlogger-Brochure.pdf');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
