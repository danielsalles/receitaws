'use strict'

const axios = require('axios')
const daysValidate = require('./validate').days

const makeAxios = opt => axios.create({
	baseURL: 'https://www.receitaws.com.br/v1/cnpj/',
	timeout: opt.timeout,
	headers: hasToken(opt.token) ? {'Authorization:': opt.token} : null
})

const hasToken = token => token !== null

module.exports = (cnpj, days, opt) => makeAxios(opt)
.get(hasToken(opt.token) ? `/${cnpj}/days/${opt.days}` : `/${cnpj}`)
.then(v => v.data)