const R = require('ramda')
const https = require('./helpers/https')
const validateOpt = require('./helpers/validate').options
const defineDefault = require('./helpers/utils').defineDefault
const validateTypes = R.pipe(defineDefault, validateOpt)

const receitaWS = options => (cnpj, days = null) => https(cnpj, days, validateTypes(options))