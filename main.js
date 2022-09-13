const express = require("express");
const app = express();
const port =  process.env.PORT || 6270
const name = require("./student.json");


app.get("/name", (req, res) => {
    res.json(name)
     });

     app.listen(port, () => {
        console.log( ` app listening at http://localhost:${port}`)
      })

      //   heroku keys:add

//   heroku create <unique_name> //from root of project 1. remote/live url 2. wher to deploy
  
//   enter in scripts --> "start" : "node src/app.js"
  
//   change port --> const port = 3000 || process.env.PORT
  
//   git remote // show connected remote
  
//   git push heroku master