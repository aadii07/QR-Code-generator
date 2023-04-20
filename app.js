 const QRCode = require('qrcode')
 

let data = {
    name:"Aditya Raj",
    age:21,
    department:"NODE",
    id:"INT078"
}
 
 
let stringdata = JSON.stringify(data)
 
QRCode.toFile('./y-qrcode.png', `${stringdata}`, {
  color: {
    dark: '#000',  
    light: '#fff'  
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code generated!');
});


const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "adityatat7@gmail.com",
    pass: "yyjcwrssgrfjuvfl",
  },
});

// send mail with defined transport object
let mailOptions = {
  from: 'adityatat7@gmail.com', // sender address
  to: "aaditya.raj752000@gmail.com", // list of receivers
  subject: "Test Email", // Subject line
  text: "Nodemailer seh mail aaya.", // plain text body
 // attachment:("./y-qrcode.png")
  attachments: [{
    //filename: 'y-qrcode.png',
    path: __dirname +'/y-qrcode.png',
   // cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
}]

};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});