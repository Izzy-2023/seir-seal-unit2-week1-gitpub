//*************************** */
// DEPENDENCIES
// Brings things from libraries and other files
//*************************** */

//import the express library
const express = require("express")

//*************************** */
// Create Express Application Object
// This is the center of our express universe
//**************************** */

// express(): returns an express application object
const app = express()

// *******************************
// Import Drinks
// *******************************

// import our drinks
// require will return the value of module.exports
const drinks = require("./models/drinks")

//*****************************
// ROUTES
// Which function should run for differnt (method/url) pairs
// ****************************

app.get("/", (req, res) => {
    // res.send(something) will send the response based on the input
    // an html string: will send back as html
    // js array or object: will send back json
    // string: sends back as text
    res.send("<h1>Welcome to the Gitpub App!</h1>")
})

// Set EJS as the view engine
app.set("view engine", "ejs"); 

app.get("/drinks", (req, res) => {
    // Capitalize the first letter of each drink's name
    const capitalizedDrinks = drinks.map(drink => {
      return { name: drink.name.charAt(0).toUpperCase() + drink.name.slice(1) };
    });
    // Pass the drinks data to index.ejs
    res.render("index", { drinks: capitalizedDrinks }); 
  });

  app.get('/drinks/:id', (req, res) => {
    const drinkIndex = req.params.id;
    const selectedDrink = drinks[drinkIndex];
    // Pass selected drink data to show.ejs
    res.render('show', { drink: selectedDrink }); 
  });

// *****************************
// TURNING ON SERVER LISTENER
// WILL TELL OUR APP TO LISTEN FOR REQUESTS
// ON A CERTAIN PORT
// *****************************
// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3000, () => {console.log("server is listening on port 3000")})