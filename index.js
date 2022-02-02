const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json()) //middle json
app.use(cors("*"))
app.post('/calc', function (req, res) {

    const { body } = req
    const { operador, valor1, valor2 } = body

    const num1 = parseInt(valor1);
    const num2 = parseInt(valor2);

    switch (operador) {
        case '+': res.json(num1 + num2);
            break;
        case '-': res.json(num1 - num2);
            break;
        case '*': res.json(num1 * num2);
            break;
        case '/': if (valor2 == 0) res.status(400).send('Erro. Divisão por 0.')
        else res.json(num1 / num2);
            break;
        default: res.status(400).send('Operador inválido');
    }
})

app.listen(3000)
console.log('Server runing...')