

function switchPages(id) {

    let mainPage = document.getElementById("main-page");
    let docPage = document.getElementById("doc-page");


    if (id === "main-page") {
        mainPage.style.display = "block";
        docPage.style.display = "none";
    } else if (id === "doc-page") {
        mainPage.style.display = "none";
        docPage.style.display = "block";
    }
}

function handleSubmit(event) {
    event.preventDefault();


    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let vehicleTypeVal = document.querySelector('select[name="option"]');
    let vehicleType = vehicleTypeVal ? vehicleTypeVal.value : null;
    let message = document.querySelector('textarea[name="messege"]').value;


    let formData = {
        name: name,
        email: email,
        option: vehicleType,
        message: message
    };


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rahulborkar2001@gmail.com",
        Password: "0A0B08D2D3207734AC24E43B16B5E66E0BDF",
        To: 'rahulborkar7387@gmail.com',
        From: 'rahulborkar2001@gmail.com',
        Subject: 'This is Subject',
        Body: message
    }).then(
        message => alert(message)
    );
}




