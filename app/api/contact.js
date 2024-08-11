import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure your email transport using nodemailer
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Using Gmail's SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'adityagavali0911@gmail.com', // your email
        pass: 'aditya2632', // your email password or app-specific password
      },
    });

    // Email content
    let mailOptions = {
      from: `"Website Contact" <adityagavali0911@gmail.com>`,
      to: 'adityagavali0911@gmail.com', // your email address where you want to receive notifications
      subject: 'New Contact Us Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
