var $ = document.querySelector.bind(document);

function showDiv(div, time) {
    div.style.display = 'block';
    div.focus();
    setTimeout(function() {
        div.style.display = 'none'
    }, time);
}

function checkInvalidName(nome) {
    var $failureDiv = $('.onFailure');
    if (nome === ''){
        $failureDiv.innerHTML = "O campo nome é obrigatório";
        showDiv($failureDiv, 2000);
        return true;
    } else if (nome.length < 3) {
        $failureDiv.innerHTML = "Nome deve ter no minimo 3 caracteres";
        showDiv($failureDiv, 2000);
        return true;
    } else {
        return false;
    }
}

function checkInvalidEmail(email) {
    var $failureDiv = $('.onFailure');
    if (savedUsers && email in savedUsers) {
        $failureDiv.innerHTML = "Email já cadastrado";
        showDiv($failureDiv, 2000);
        return true;
    } else if (email === '' || email.indexOf('.') === -1) {
        $failureDiv.innerHTML = "Email inválido";
        showDiv($failureDiv, 2000);
        return true;
    } else {
        return false;
    }
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
    if (checkInvalidName(nome)) return;
    let email = $("#email").value;
    if (checkInvalidEmail(email)) return;
    let user = savedUsers || {};
    user[email] = nome;
    localStorage.setItem('savedUsers', JSON.stringify(user));
    registerSuccess();
}

if (localStorage.getItem('savedUsers') !== null && localStorage.getItem('savedUsers') !== '') {
    var savedUsers = JSON.parse(localStorage.getItem('savedUsers'));
}