const isUndefined = require('lodash').isUndefined

exports.defineDefault = opt => {
	if(isUndefined(opt.timeout)) opt.timeout = 5000
	if(isUndefined(opt.token)) opt.token = null

	return opt
}