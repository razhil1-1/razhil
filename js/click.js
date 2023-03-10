function sendMail() {
    var templateParams = {
      
        name:document.getElementById("name" ).value , 
        email:document.getElementById("email").value , 
        subject:document.getElementById("subject").value , 
        message:document.getElementById("message").value , 
    };
     
    
    const serviceId = "service_xlw5xrd";
    const templateId = "template_ktqug4d";
    
    emailjs.send(serviceId,templateId, templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           swal({
  title: "Success",
  text: "Message sent!",
  type: "success",
  confirmButtonText: "Back"
})
        }, function(error) {
           console.log('FAILED...', error);
        });
    
    }
    