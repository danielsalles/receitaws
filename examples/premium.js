const receitaws = require('receitaws')

const opt = {
	timeout: 10000,
	token: 'SUA_TOKEN_DA_API'
}
const instance = receitaws(opt)

instance('27865757000102', 10).then(v => console.log(v.data), (error => console.log(error)))