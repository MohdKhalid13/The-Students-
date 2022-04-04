const {jav} = require('./mon')
var nodemailer = require('nodemailer');



const sendMail = (from, text)=>{  
    console.log("h",from,text);
    var transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            author: {
                user :'cadcad166@gmail.com'
            }
            
        }
        );
        
        var mailoptions = {
        from: from,
        to : 'cadcad166@gmail.com',
        subject : mail,
        text : null,
    };
    
    transporter.sendMail(mailoptions,function(error , info){
        if(error){
            console.log(error);
    
        }else{
            console.log('Email sent' + info.response);
        }
    });
}
module.exports = {
sendMail
}