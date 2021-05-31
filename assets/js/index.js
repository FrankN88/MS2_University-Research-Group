

// Modal for cookies
$("#alert_modal").modal('show');
setTimeout(function() {
    $("#alert_modal").modal('hide');
}, 3500);

window.addEventListener("cookieAlertAccept", function() {
    alert("cookies accepted")
})
