const isBoolean = require('lodash').isBoolean
const isString = require('lodash').isString
const isNull = require('lodash').isNull
const isInteger = require('lodash').isInteger
const isObjectLike = require('lodash').isObjectLike

exports.options = obj => {
	if(obj === undefined) throw new Error('É obrigatório passar um parâmetro')
	if(isObjectLike(obj) === false ) throw new Error('O argumento precisa ser um objeto valido.')
	if(isInteger(obj.timeout) === false) throw new Error('O elemento timeout precisa ser Integer.')
	if((isString(obj.token) || isNull(obj.token)) === false) throw new Error('O elemento token precisa ser string ou null.')

	return obj
}

exports.days = days => {
	if(isInteger(days) === false) throw new Error('O argumento days precisa ser Integer.')
	if(days < 0) throw new Error('O argumento days tem que ser maior que 0.')

	return days
}