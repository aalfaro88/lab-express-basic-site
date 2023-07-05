const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));
 
// home Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
 
// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'));
 
// works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works-page.html'));

// photo gallery route:
app.get('/photo-gallery', (request, response, next) => response.sendFile(__dirname + '/views/photo-gallery-page.html'));

// Server Started
app.listen(3000, () => console.log('App listening on port 3000!'));

