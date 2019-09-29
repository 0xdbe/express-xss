
// Get express framework
const express = require('express');
const pug = require('pug');

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
  let template = `
h1 hello ${name}
form(method='GET' action='/')
  label(for='name') What is your name ?
  input(type='text', name='name')
  button(type='submit') Submit`;
  
  // Render View
  res.send(pug.render(template));  
})


// Start Application
app.listen(3000, '0.0.0.0', () => console.log('app listening on 3000'));
