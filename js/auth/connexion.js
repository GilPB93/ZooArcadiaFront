// VALIDATION FORMULAIRE CONNEXION
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");


btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(inputMail.value == "test@mail.com" && inputPassword.value == "123"){ //crédentials fictives
        alert("Connexion réussie");

        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf"; //token fictif

        setToken(token); //ceci est à placer après la création du fichier script.js et ses fonctions(point suivant)

        //placer ce token en cookie
        setCookie(RoleCookieName, "admin", 7); //temporaire
        window.location.replace("/");
    }
    else{
        alert("Connexion échouée");
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}



