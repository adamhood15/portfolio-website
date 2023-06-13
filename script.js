
function openNav() {
    console.log('hello');
    document.getElementById('mySideNav').style.width = "100px";
}

function closeNav() {
    document.getElementById('mySideNav').style.width = "0px";
}

// document.querySelector('.contact-form').addEventListener('submit', );
document.querySelector('.openSidenav').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);