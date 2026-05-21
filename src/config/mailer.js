const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTPEmail = async (toEmail, otp) => {
  const mailOptions = {
    from: `"Auth API" <${process.env.EMAIL_FROM}>`,
    to: toEmail,
    subject: 'Your Password Reset OTP',
    html: `
      <h2>Password Reset Request</h2>
      <p>Your OTP is: <strong>${otp}</strong></p>
      <p>This OTP is valid for <strong>5 minutes</strong>.</p>
      <p>If you did not request this, ignore this email.</p>
    `,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendOTPEmail };