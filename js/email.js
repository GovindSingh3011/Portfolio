(function () {
    emailjs.init("V_mkrOB8lgHa7llrL");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm("portfoliocontactform", "contactformtemplate", this)
        .then(function () {
            $("#message_sent").modal("show");
            $("#contact-form").trigger("reset");
        }, function (error) {
            $("#message_fail").modal("show");
        });
});