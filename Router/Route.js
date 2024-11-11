export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.authorize = authorize;
    this.pathJS = pathJS;
  }
}

/*
[] - every role
[disconnected] - only disconnected
[admin] - only admin
[veterinaire] - only veterinaire
[employe] - only employe
*/