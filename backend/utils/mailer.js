const AWS = require("aws-sdk");

// Set region (make sure it's the one your SES is in)
AWS.config.update({ region: "us-east-1" }); // change region as per your SES setup

// Load from env
const { EMAIL_USER, EMAIL_RECEIVER } = process.env;

// Create an SES instance
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const sendUserDetails = async ({ name, email, phone, message }) => {
  const params = {
    Source: EMAIL_USER, // Must be verified in SES (if in sandbox)
    Destination: {
      ToAddresses: [EMAIL_RECEIVER], // Also should be verified if in sandbox
    },
    Message: {
      Subject: {
        Data: "New User Detail Submission",
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
            <h2>User Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        },
      },
    },
  };

  // Send the email
  try {
    const result = await ses.sendEmail(params).promise();
    return result;
  } catch (err) {
    console.error("Error sending email via SES:", err);
    throw err;
  }
};

module.exports = { sendUserDetails };
