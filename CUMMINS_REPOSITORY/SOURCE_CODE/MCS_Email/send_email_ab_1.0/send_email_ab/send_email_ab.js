module.exports = function(service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */


	service.post('/mobile/custom/send_email_ab/sendEmail', function(req,res) {
			var Mailgun = require('mailgun').Mailgun;

			var mg = new Mailgun('key-9db582f2017d3de328f386b5a6bfe28f');
			mg.sendText('css@gmail.com', [ 'anirban.bagchi@oracle.com'],
			  'This is the subject- MG - MCS - unit6278',
			  'This is the text',
			  'noreply@example.com', {},
			  function(err) {
				if (err) console.log('Oh noes: ' + err);
				else     console.log('Success');
			});
	});

};
