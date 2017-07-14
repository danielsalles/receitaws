const axios = require('axios')
const daysValidate = require('./validate').days
const hasToken = token => token !== null

const makeAxios = opt => axios.create({
	baseURL: 'https://www.receitaws.com.br/v1/cnpj/',
	timeout: opt.timeout,
	headers: hasToken(opt.token) ? {'Authorization:': opt.token} : null
})

const gettingURL = (cnpj, days, opt) => hasToken(opt.token) ? 
										`/${cnpj}/days/${daysValidate(days)}` :
										`/${cnpj}`

module.exports = (cnpj, days, opt) => makeAxios(opt)
.get(gettingURL(cnpj, days, opt))