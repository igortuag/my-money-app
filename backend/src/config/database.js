const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.require = "The '{PATH}' attribute is mandatory."
mongoose.Error.messages.Number.min = "The '{VALUE}' entered is less than the minimum threshold of '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.Number.enum = "'{VALUE}' is not valid for the '{PATH}' attribute."