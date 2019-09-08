
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
      name = req.query.name;
  }
    
  // Define template
  let template = `
h1 hello !{name}
form(method='GET' action='/')
  label(for='name') What is your name ?
  input#name.form-control(type='text', placeholder='first and last' name='name')
  button.btn.btn-primary(type='submit') Submit`;
  
  // Render View
  res.send(pug.render(template));  
})


// Start Application
app.listen(3000, () => console.log('app listening on 3000'));
