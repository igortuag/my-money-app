const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min: 0, require: true}
})

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true },
    value: { type: Number, min: 0, require: [true, 'Enter the amount of the debit!'] },
    status: { type: String, require: false, uppercase: true,
        enum: ['PAID', 'PENDING', 'SCHEDULED'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, require: true },
    month: { type: Number, min: 1, max: 12, require: true },
    year: { type: Number, min: 1970, max: 2100, require: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)