document.addEventListener("DOMContentLoaded", function() {
    const user = {
        name: "Dimeji Ojewunmi",
        username: "D'mex",
        email: "ojewumidimeji@gmail.com",
        message: "Glad to be Part of the 11th cohort at HNG Internship, which has just kick started. For more info, if you would love to be part of the great community network happening here, kindly log on to <a href='https://hng.tech' target='_blank'>hng.tech</a>"
    };

    document.getElementById("name").innerHTML = user.name;
    document.getElementById("username").innerHTML = user.username;
    document.getElementById("email").innerHTML = user.email;
    document.getElementById("message").innerHTML = user.message;
});

