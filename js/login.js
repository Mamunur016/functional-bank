

document.getElementById('login-submit').addEventListener('click', function () {
    // get user email

    const emailInput = document.getElementById('user-email').value;
    const passwordInput = document.getElementById('user-password').value;

    if (emailInput == 'mamun@gmail.com' && passwordInput == 'mamun') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Enter right email and password!');
    }


});