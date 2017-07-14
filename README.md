# O que faz?
Faz a consulta de CNPJ no site [receitaws](https://receitaws.com.br/), utilizando o modo free ou não. Depende das configurações passadas no **options**.

# Exemplos
Pela api ser bastante simples, eu vou exemplificar como fazer a requisição de forma simplificada.
Antes de tudo use o comando `npm install receitaws --save`.

## Modo free
```javascript
const receitaws = require('receitaws')

// configuração
const opt = {
	timeout: 10000
}

// instancia passando o parametro opt
const instance = receitaws(opt)

// faz a requisição
instance('27865757000102').then(v => console.log(v.data), (error => console.log(error)))
```
## Modo premium
A diferença mais expressiva é que no modo **premium** será necessário passar o `token` como configuração, e também um segundo parametro no CNPJ que é responsável pela quantidade de dias máximos. No caso ali em passei 10 `instance('27865757000102', 10)`
```javascript
const receitaws = require('receitaws')

const opt = {
	timeout: 10000,
	token: 'SUA_TOKEN_DA_API'
}
const instance = receitaws(opt)

instance('27865757000102', 10).then(v => console.log(v.data), (error => console.log(error)))
```

## Nota:
O retorno de ambos é realizado no formato do [axios](https://github.com/mzabriskie/axios). Para maiores informaçoes sobre o retorno pesquise a documentação dele.

# API:
* receitaws() - Aceita o parametro opt que é um objeto.
* parametro opt - Aceita dois elementos: `timeout` e `token`. E `token` é obrigatório caso queira fazer uma pesquisa premium.
* instance() - Aceita dois parametros: `CNPJ` e `days`. `CNPJ` deve ser passado string com os numeros, e o `days` deve ser passado um Number.
