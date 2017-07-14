const isUndefined = require('lodash').isUndefined

exports.defineDefault = opt => {
	if(isUndefined(opt)) opt = {}
	if(isUndefined(opt.timeout)) opt.timeout = 10000
	if(isUndefined(opt.token)) opt.token = null

	return opt
}