const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
const dotenv = require('dotenv');
dotenv.config()
async function main() {
    

  let transporter = nodemailer.createTransport(smtpTransport({
    name: process.env.NAME,
    host: process.env.HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SENDER, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  }));

  // send mail with defined transport object
  transporter.sendMail({
    from: `"${process.env.PRODUCT}" <${process.env.SENDER}>`, // sender address
    to: process.env.TO, // list of receivers
    subject: "Hello", // Subject line
    html: "<b>Hey Saurav</b>", // html body
  })
  .then((result)=>{
      console.log(result)
  })
  .catch(err=>console.log(err))


  
}

main().catch(console.error);