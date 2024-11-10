//Implémenter le JS de ma page

const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");

inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);


//Function permettant de valider tout le formulaire
function validateForm(){   //créer une fonction qui valide le formulaire
    validateRequired(inputMail); //pour cela on appel la fonction validateRequired
    validateRequired(inputPassword);
}

function validateRequired(input){ //créer une fonction valider un input = si la valeur est différente de vide, ...
    if(input.value != ''){  //...dans ce cas c'est valide...
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
    }
    else{  //...sinon c'est pas valide
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}






const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignIn = document.getElementById("btnSignin");

btnSignIn.addEventListener("click", checkCredentials);

function checkCredentials() {
    alert("bouton clické");
}