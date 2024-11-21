import nodemailer from 'nodemailer';

const sendEmail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // My email 
      pass: process.env.EMAIL_PASSWORD, // My password... 
    },
  });

  const mailOptions = {
    from: email,
    to: 'abedintelaku1@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: 200, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { status: 500, message: 'Failed to send email.' };
  }
};

export default sendEmail;
