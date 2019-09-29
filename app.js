
// Get express framework
const express = require('express');

// Create an express application
const app = express();

// Create a greeting endpoint
app.get('/', (req, res) => {
    
  // Setting Greeting name
  let name = "world"
  if(typeof req.query.name != 'undefined'){
      console.log(req.query.name);
      name = req.query.name;
  }
    
  // Define template
  let htmlContent = `
    <h1>hello ${name}</h1></br>
    <form action="/">
      What is your name ?
      <input type="text" name="name" value="${name}">
      <input type="submit" value="Submit">
    </form>`;
  
  // Render View
  res.send(htmlContent);  
})


// Start Application
app.listen(3000, '0.0.0.0', () => console.log('app listening on 3000'));
