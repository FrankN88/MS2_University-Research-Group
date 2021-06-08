/**
 * [sendEmail to send email using EmailJS
 * The API that is used is described here: https://www.emailjs.com/
 */
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...'; // Sending in progress

        const serviceID = 'default_service';
        const templateID = 'template_l5nl898';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!'); // Success sending email
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err)); // Error
            });
        this.reset() // Resetting fields after sending

    });

// Text area that autogrows based on its content
document.getElementById("field").addEventListener("input", function() {
    this.style.height = 'inherit';
    let height = this.scrollHeight;
    this.style.height = height + "px";
})