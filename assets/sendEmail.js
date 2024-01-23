

 /*var templateParams = {
    name: 'Amy',
    notes: 'Check this out!'
};*/

function sendMail(contactForm) {
    emailjs.send("service_naeyqkf", "template_nbukpv4", {
        "from_name": contactForm.nameinput.value,
        "from_email": contactForm.emailinputs.value,
        "project_request": contactForm.messagearea.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
 
/*handleFormSubmission(form)('service_naeyqkf', 'template_nbukpv4', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });*/