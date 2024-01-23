function sendMail(contactform) {
    emailjs.send("service_naeyqkf", "template_nbukpv4", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.name.emailaddress.value,
        "message": conactForm.message.value,
    }}
    .then(
        function(response) {
            console.log("success", response)
        }
        function(error) {
            console.log("Error"),reponse {

        }};
 )