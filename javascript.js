// Press Arrow on Homepage

function jump(){
    document.getElementById("jumpHere").scrollIntoView({behavior: 'smooth'});
}

document.querySelector("#move").addEventListener('click', jump)



