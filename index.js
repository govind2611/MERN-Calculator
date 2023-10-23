
/* this method is using query */
/* const express = require("express");
const app = express();

// hit the url :--  http://localhost:2601/add?num1=10&num2=10

// creating endpoint for add
app.get("/add", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sum = num1 + num2;

  res.status(200).json(sum);
});

// creating endpoint for subtraction
app.get("/sub", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sub = num1 - num2;

  res.status(200).json(sub);
});

// creating endpoint for multiplication
app.get("/multi", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const multi = num1 * num2;

  res.status(200).json(multi);
});

// creating endpoint for multiplication
app.get("/div", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const div = num1 / num2;
  if (num2 <= 0) {
    res.status(400).send("Enter thr number greater than 0");
  }

  res.status(200).json(div);
});

app.listen(2601, () => {
  console.log("Server is running at port 2601");
});

*/


/* this method is using params */
// hit the url :-- localhost:2601/div/25/20
/*
const express = require("express");
const app = express();

//add
app.get("/add/:num1/:num2", (req, res) => {
  console.log(
    "Addition of two num :",
    parseInt(req.params.num1) + parseInt(req.params.num2)
  );
  res.send("Addition done");
});

//sub
app.get("/sub/:num1/:num2", (req, res) => {
  console.log(
    "Substraction of two num is : ",
    parseInt(req.params.num1) - parseInt(req.params.num2)
  );
  res.send("Substraction done");
});
//multi
app.get("/multi/:num1/:num2", (req, res) => {
  console.log(
    "Multiplication is completed : ",
    parseInt(req.params.num1) * parseInt(req.params.num2)
  );
  res.send("Multiplication done");
});
//div
app.get("/div/:num1/:num2", (req, res) => {
   if (num2 <= 0) {
    res.status(400).send("Enter thr number greater than 0");
  }
  console.log(
    "Division is completed",
    parseInt(req.params.num1) / parseInt(req.params.num2)
  );
  res.send("Division done");
});

app.listen(2601, () => {
  console.log("Server is running at port 2601");
});
*/

/* this method is using body */

/* 
 url :-- localhost:2601/add

 choose post method
 enter url
 go to body 
 inside body choose row
 choose json
 add {}

 {
    "num1":50,
    "num2":40
}
*/

const express = require('express');
const app = express();
const cors = require('cors')

/* whenever the data coming from client we have to convert it into json */
app.use(express.json());
app.use(cors())

// add
app.post("/add", (req, res)=>{
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const sum = parseInt(num1+num2)

  res.status(200).json(sum)
})

//sub
app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const sub = parseInt(num1-num2);

  res.status(200).json(sub)
})

//multi
app.post("/multi", (req, res)=>{
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const multi = parseInt(num1*num2);

  res.status(200).json(multi);
})

//div
app.post("/div", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if(num2 === 0){
    return res.status(400).send("Please enter the number greater than 0")
  }
  const div = parseInt(num1 / num2);

  res.status(200).json(div);
})

app.listen(2601, ()=>{
  console.log("Server is running at port 2601");
})