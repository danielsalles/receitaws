'use strict'

const https = require('./helpers/https')
const validate = require('./helpers/validate')
const defineDefault = require('./helpers/utils').defineDefault

const receitaWS = options => {
	const normalized = defineDefault(options)
	validate.options(normalized)

	return (cnpj, days = null) => https(cnpj, days, normalized)
}


// TESTE BOBO
// ARGUMENTO OPT
// timeout, token

// Caso tenha token ele vá usar a premium
const opt = {
	timeout: 5000
}
const instance = receitaWS(opt)
instance('27865757000102')
	.then(v => console.log(v))