const tokenCookieName = "accesstoken"; 
const signoutBtn = document.getElementById("signout-btn") 
const RoleCookieName = "role"; // temporaire

signoutBtn.addEventListener("click", signout) 

// GET ROLE
function getRole(){
    return getCookie(RoleCookieName);
}

// BTN SIGNOUT
function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);    //temporaire
    window.location.reload();
}

// SET TOKEN
function setToken(token){ 
    setCookie(tokenCookieName, token, 7); 
}

// GET TOKEN
function getToken(){
    return getCookie(tokenCookieName); 
}

// DELETE TOKEN
function setCookie(name,value,days) { 
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}


// GET COOKIE
function getCookie(name) { 
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(const element of ca) {
        let c = element;
        while (c.startsWith(' ')) c = c.substring(1,c.length);
        if (c.startsWith(nameEQ)) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// DELETE COOKIE
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// IS CONNECTED
function isConnected(){
    return getToken() != null;
}

// SHOW AND HIDE ELEMENTS BY ROLES
function showAndHideElementsForRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]'); 

    allElementsToEdit.forEach(element =>{
        switch(element.dataset.show){  
            case 'disconnected': 
                if(userConnected){
                    element.classList.add("d-none"); 
                }
                break;
            case 'connected': 
                if(!userConnected){
                    element.classList.add("d-none"); 
                }
                break;
            case 'admin': 
                if(!userConnected || role != "admin"){ 
                    element.classList.add("d-none"); 
                }
                break;
            case 'veterinaire': 
                if(!userConnected || role != "veterinaire"){ 
                    element.classList.add("d-none"); 
                }
                break;
            case 'employe': 
                if(!userConnected || role != "employe"){ 
                    element.classList.add("d-none"); 
                }
                break;
        }
    })
}
