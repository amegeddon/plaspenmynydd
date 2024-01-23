function sendMail(contactForm) {
    emailjs.send("service_naeyqkf", "template_nbukpv4", {
        "from_name": contactForm.nameinput.value,
        "from_email": contactForm.emailinput.value,
        "message": contactForm.messagearea.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.location.href = "thankyou.html";
        },
        function(error) {
            console.log("FAILED", error);
            window.location.href = "404.html";
        }
    );
    return false;  
}
 
