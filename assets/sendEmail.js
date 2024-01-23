

 var templateParams = {
    name: 'Amy',
    notes: 'Check this out!'
};
 
emailjs.send('service_naeyqkf', 'template_nbukpv4', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });