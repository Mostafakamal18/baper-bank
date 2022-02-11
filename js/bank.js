document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userMail = emailField.value;

    //user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //get 
    if (userMail == 'mostafa@gmail.com' && userPassword == 'secret') {
        window.location.href = 'js/banking.html'
    }
})

