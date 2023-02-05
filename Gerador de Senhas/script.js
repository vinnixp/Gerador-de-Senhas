var sliderElement = document.querySelector("#slider")
var buttonElement = document.querySelector("#button")

var sizePassword = document.querySelector("#valor")
var password = document.querySelector("#password")

var containerPassword = document.querySelector("#container-password")

var alf = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
var novaSenha = ""

sizePassword.innerHTML = sliderElement.value
    
slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){

    var pass = "";

    for(var i = 0 , n = alf.length ; i < sliderElement.value; ++i){
        pass += alf.charAt(Math.floor(Math.random() * n));

    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    novaSenha = pass
}

function copyPassword(){
    alert(`A sua senha "${novaSenha}" foi copiada!`)
    navigator.clipboard.writeText(novaSenha)

}
