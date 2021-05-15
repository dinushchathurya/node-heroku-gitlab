const express = require('express');
const bodyParser = require('body-parser');

// function which adds two numbers and returns the result
const addNumbers = (firstNumber, secondNumber) => {
    //   check that input is a number
    if (typeof (Number(firstNumber)) !== 'number' || typeof (Number(secondNumber)) !== 'number') {
        return 'Values should be integer or numbers'
    }
    return Number(firstNumber) + Number(secondNumber);
}

const { urlencoded, json } = bodyParser;
const port = process.env.PORT || 8080;

// intialize our express app
const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

// end point to add numbers
app.post('/api/add', (req, res) => {
    const { firstNumber, secondNumber } = req.body;
    const result = addNumbers(firstNumber, secondNumber);
    return res.status(200).send({
        result
    });
});

// app entry point
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to CodingtrickS.io',
}));

// setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to continouns intergration with Node.js, Heroku and GitLab.',
}));

app.listen(port, (err) => {
    if (!err) {
        console.log(`App started on port ${port}`);
    } else {
        console.log(err);
    }
});

module.exports = app;