const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/index.html");
  });

app.post("/", function(req, res) {

    var num1 =  Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send("le resultat du calcul est " + result + ".");
});

app.get('/calculatorBmi', function (req, res) {
    res.sendFile( __dirname + "/calculatorBmi.html");
  });

app.post("/calculatorBmi", function(req, res) {
    
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var bmiResult = bmiCalculator(weight, height);
    
    res.send(bmiResult);
});

app.listen(port, function () {
    console.log("Calculator server is started on the port " + port);
});

function bmiCalculator(weight,height) {

    var bmi = Math.round(weight / Math.pow(height,2));
    var interpretation;
    
    if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}

    if (bmi >= 18.5 && bmi < 24.9) {
    interpretation ="Your BMI is " + bmi + ", so you have a normal weight.";
}

    if (bmi >= 25) {
    interpretation ="Your BMI is " + bmi + ", so you are overweight.";
}
   
   return interpretation;
    
}