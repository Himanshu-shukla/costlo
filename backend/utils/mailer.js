const AWS = require("aws-sdk");

// Set region (make sure it's the one your SES is in)
AWS.config.update({ region: "us-east-1" }); // change region as per your SES setup

// Load from env
const { EMAIL_USER, EMAIL_RECEIVER } = process.env;

// Create an SES instance
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const sendUserDetails = async ({
  name = "",
  email = "",
  phone = "",
  message = "",
  dob = "",     // ✅ Date of Birth (YYYY-MM-DD)
  tob = "",     // ✅ Time of Birth (HH:MM)
  pob = ""      // ✅ Place of Birth
}) => {
  // Escape all fields before embedding in HTML
  const _name = escapeHtml(name);
  const _email = escapeHtml(email);
  const _phone = escapeHtml(phone);
  const _message = escapeHtml(message);
  const _dob = escapeHtml(dob);
  const _tob = escapeHtml(tob);
  const _pob = escapeHtml(pob);

  const htmlBody = `
    <h2>User Details</h2>
    <table style="border-collapse:collapse;max-width:600px" border="1" cellpadding="8">
      <tr><td><strong>Name</strong></td><td>${_name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${_email}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${_phone}</td></tr>
      <tr><td><strong>Date of Birth</strong></td><td>${_dob}</td></tr>
      <tr><td><strong>Time of Birth</strong></td><td>${_tob}</td></tr>
      <tr><td><strong>Place of Birth</strong></td><td>${_pob}</td></tr>
      <tr><td><strong>Message</strong></td><td>${_message.replace(/\n/g, "<br/>")}</td></tr>
    </table>
  `;

  const params = {
    Source: EMAIL_USER, // ✅ Must be verified in SES (if account is in sandbox)
    Destination: {
      ToAddresses: [EMAIL_RECEIVER], // ✅ Also must be verified in sandbox
    },
    Message: {
      Subject: { Data: "New User Detail Submission" },
      Body: {
        Html: { Charset: "UTF-8", Data: htmlBody }
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (err) {
    console.error("Error sending email via SES:", err);
    throw err;
  }
};

module.exports = { sendUserDetails };
