module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.post('/mobile/custom/sendemail/sendEmail', function(req,res) {
		
		var nodemailer = require('nodemailer');

		// create reusable transporter object using SMTP transport
		var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'css.test.2015.07@gmail.com',
				pass: 'welcome1@'
			}
		});

		// NB! No need to recreate the transporter object. You can use
		// the same transporter object for all e-mails

		// setup e-mail data with unicode symbols
		var mailOptions = {
			from: 'CSS TEST Foo ✔ <css.test.2015.07@gmail.com>', // sender address
			to: 'anirban.bagchi@oracle.com', // list of receivers
			subject: 'Hello ✔', // Subject line
			text: 'Hello world ✔', // plaintext body
			html: '<b>Hello world ✔</b>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
			if(error){
				return console.log(error);
			}
			console.log('Message sent: ' + info.response);

		});
		
		var result = {};
		res.send(201, result);
	});

};
