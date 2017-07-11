'use strict'

const isBoolean = require('lodash').isBoolean
const isString = require('lodash').isString
const isNull = require('lodash').isNull
const isInteger = require('lodash').isInteger

exports.options = obj => {
	if(isInteger(obj.timeout) === false) throw new Error('O elemento timeout precisa ser Integer.')
	if((isString(obj.token) || isNull(obj.token)) === false) throw new Error('O elemento token precisa ser string ou null.')
}

exports.days = days => {
	if(isInteger(days) === false) throw new Error('O argumento days precisa ser Integer.')
	if(days < 0) throw new Error('O argumento days tem que ser maior que 0.')
}