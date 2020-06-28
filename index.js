const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

async function main() {

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport(smtpTransport({
    name: 'hostgator',
    host: "mail.liteboards.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'admin@mail.liteboards.com', // generated ethereal user
      pass: 'Shagun01', // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  }));

  // send mail with defined transport object
  transporter.sendMail({
    from: 'admin@mail.liteboards.com', // sender address
    to: "sauravsehgal44@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    html: "<b>Hello world</b>", // html body
  })
  .then((result)=>{
      console.log(result)
  })
  .catch(err=>console.log(err))


  
}

main().catch(console.error);