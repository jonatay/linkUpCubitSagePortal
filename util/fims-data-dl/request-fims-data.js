var request = require('request').defaults({jar: true});


var j = request.jar();
var request = request.defaults({ jar : j }) //it will make the session default for every request
//...
request({
    url:"https://www.erobertparker.com/login.aspx",
    method:"POST",
    form:{username:"client-luc",password_clear:"Enable6903"}
  },
  function(error,response,body){
    //Do your logic here or even another request like
    console.log(body);
    // request({
    //   url:"<ANOTHER LINK>",
    //   method:"GET",
    // }, function(error, response, body){
    //   //Some logic
    // });
  });