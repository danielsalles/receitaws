'use strict'

const axios = require('axios')
const daysValidate = require('./validate').days

const makeAxios = opt => {
	return axios.create({
		baseURL: 'https://www.receitaws.com.br/v1/cnpj/',
		timeout: opt.timeout,
		headers: hasToken(opt.token) ? {'Authorization:': opt.token} : null
	})
}

const hasToken = token => token !== null
const premium = (cnpj, opt, days) => {
	daysValidate(days)
	return makeAxios(opt)
			.get(`/${cnpj}/days/${opt.days}`)
			.then(v => v.data)
}
const free = (cnpj, opt) => makeAxios(opt)
							.get(`/${cnpj}`)
							.then(v => v.data)

module.exports = (cnpj, days, opt) => hasToken(opt.token) ? premium(cnpj, opt, days) : free(cnpj, opt)