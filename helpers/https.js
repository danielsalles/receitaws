'use strict'

const axios = require('axios')
const daysValidate = require('./validate').days

const makeAxios = opt => axios.create({
	baseURL: 'https://www.receitaws.com.br/v1/cnpj/',
	timeout: opt.timeout,
	headers: hasToken(opt.token) ? {'Authorization:': opt.token} : null
})

const hasToken = token => token !== null

const gettingURL = (cnpj, days, opt) => {
	if(hasToken(opt.token)){
		daysValidate(days)
		return `/${cnpj}/days/${opt.days}`
	}
	return `/${cnpj}`
}

module.exports = (cnpj, days, opt) => makeAxios(opt)
.get(gettingURL(cnpj, days, opt))
.then(v => v.data)