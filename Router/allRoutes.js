import Route from "./Route.js";

//Définir ici les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/connexion", "Connexion", "/pages/connexion/connexion.html"),
    new Route("/marais", "Marais", "/pages/habitat/marais.html"),
    new Route("/savane", "Savane", "/pages/habitat/savane.html"),
    new Route("/jungle", "Jungle", "/pages/habitat/jungle.html"),
    

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
