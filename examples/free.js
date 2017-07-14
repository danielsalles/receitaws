const receitaws = require('receitaws')

// configuração
const opt = {
	timeout: 10000
}

// instancia passando o parametro opt
const instance = receitaws(opt)

// faz a requisição
instance('27865757000102').then(v => console.log(v.data), (error => console.log(error)))