function sendMail (params) {
    let tempParams = {
        from_name : document.getElementById("fromName").value,
        to_name : document.getElementById("toName").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_aa7yrwa", "template_em9dbwg", "tempParams")
    .then(function(res){
        console.log("success", res.status);
    })
}