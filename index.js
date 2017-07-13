'use strict'

const R = require('ramda')
const https = require('./helpers/https')
const validateOpt = require('./helpers/validate').options
const defineDefault = require('./helpers/utils').defineDefault
const validateTypes = R.pipe(defineDefault, validateOpt)

const receitaWS = options => (cnpj, days = null) => https(cnpj, days, validateTypes(options))

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