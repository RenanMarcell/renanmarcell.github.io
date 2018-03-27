var $ = document.querySelector.bind(document);

function emailAlreadyUsed() {
    $('.onfailure').style.display = 'block';
    $('.onfailure').focus();
    setTimeout(function(){
        $('.onfailure').style.display = 'none';
    }, 2000);
}

function registerSuccess() {
    $('.onsuccess').style.display = 'block';
    $('.video-giphy').src = 'img/success.mp4';
    setTimeout(function(){
        $('.onsuccess').style.display = 'none';
        window.location.href = '#page-start';
        location.reload();
    }, 5000);
}

function adicionaDados(event) {
    event.preventDefault();
    let nome = $("#nome").value;
    let email = $("#email").value;
    if (email in savedUsers) {
        emailAlreadyUsed();
        return;
    }
    let user = savedUsers;
    user[email] = nome;
    localStorage.setItem('savedUsers', JSON.stringify(user));
    registerSuccess();
}

var savedUsers = JSON.parse(localStorage.getItem('savedUsers'));
