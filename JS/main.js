var password = document.getElementById('inputPassword');
var toggler = document.getElementById('toggler');

showHidePassword = () => {
    if ( password.type == 'password') {
        password.setAttribute('type', 'text');
        toggler.classList.add('fa-eye-slash');

}
else {
    toggler.classList.remove('fa-eye-slash');
    password.setAtrribute('type','password');
}

};
toggler.addEventListener('click', showHidePassword);
