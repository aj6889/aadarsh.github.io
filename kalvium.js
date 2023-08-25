npm install express body-parser
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const operationHistory = [];
const MAX_HISTORY_LENGTH = 20;
app.get('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.query;
  const result = performOperation(operation, parseFloat(num1), parseFloat(num2));

  if (!isNaN(result)) {
    addToHistory(operation, num1, num2, result);
    res.json({ result });
  } else {
    res.status(400).json({ error: 'Invalid operation or numbers' });
  }
});

function performOperation(operation, num1, num2) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    default:
      return NaN;
  }
}

function addToHistory(operation, num1, num2, result) {
  if (operationHistory.length >= MAX_HISTORY_LENGTH) {
    operationHistory.shift();
  }
  operationHistory.push({ operation, num1, num2, result });
}
app.get('/history', (req, res) => {
  res.json(operationHistory);
});
//node server.js
