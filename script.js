let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose =  document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active');
});

const firebaseConfig = {
    apiKey: "AIzaSyA_s_PyJm89YmzKaAuZWQS6ZUynIUFuvOg",
    authDomain: "loginform-163ec.firebaseapp.com",
    databaseURL: "https://loginform-163ec-default-rtdb.firebaseio.com",
    projectId: "loginform-163ec",
    storageBucket: "loginform-163ec.appspot.com",
    messagingSenderId: "1068664721832",
    appId: "1:1068664721832:web:9b5142c8187eb16f524d9d"
  };

firebase.initializeApp(firebaseConfig);

//  firebase for login form

var loginformDB = firebase.database().ref("loginform");

document.getElementById("loginform").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var emailid = getElementVal("emailid");
    var password = getElementVal("password");

    saveMessages(emailid, password);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("loginform").reset();

}

const saveMessages = (emailid, password) => {
    var newloginForm = loginformDB.push();

    newloginForm.set({
        emailid : emailid,
        password : password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

// firebase for contact form

document.getElementById("contactform").addEventListener("submit", submitForms);

function submitForms(e) {
    e.preventDefault();

    var name = getElementVals("name");
    var mail = getElementVals("mail");
    var num = getElementVals("num");
    var sub = getElementVals("sub");
    var mess = getElementVals("mess");

    saveMessage(name, mail, num, sub, mess);

     document.querySelector(".alerts").style.display = "block";

     setTimeout(() => {
         document.querySelector(".alerts").style.display = "none";
     }, 3000);

     document.getElementById("contactform").reset();

}

const saveMessage = (name, mail, num, sub, mess) => {
    var newloginForms = loginformDB.push();

    newloginForms.set({
        name : name,
        mail : mail,
        num : num,
        sub : sub,
        mess : mess,
    });
};

const getElementVals = (id) => {
    return document.getElementById(id).value;
}

