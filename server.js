var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  // host: "smtp.mailtrap.io",
  host: process.env.SMTP_HOST,
  // port: 2525,
  port: process.env.SMTP_PORT,
  secure: true,
  requireTLS  : false,
  auth: {
    user: process.env.SMTP_AuthUser,
    pass: process.env.SMTP_AuthPass
  }
});


//Default Mail
var mailOptions = {
  from: '"Example Team" <from@example.com>',
  to: 'noor@hivecorelimited.com',
  subject: 'Mail from a client',
  text: 'Hello',
};



module.exports =  function sendMail(mailBody=mailOptions){
   transport.sendMail(mailBody, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}