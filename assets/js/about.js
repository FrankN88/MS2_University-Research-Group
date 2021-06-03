// EmailJS function
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_l5nl898';

   /* const element1 = document.getElementByID('from_name').value; // testing validation
   const element2 = document.getElementByID('field').value; // testing validation

   if (element1 == "" && element2 == "") { */

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
    this.reset()

  /*} else { // testing validation
    alert("Please fill out the form before sending an email"); // testing validation
    } // testing validation*/

});





// Text area that autogrows based on its content

document.getElementById("field").addEventListener("input", function(){
  this.style.height = 'inherit';
  let height = this.scrollHeight;
  this.style.height = height + "px";
})