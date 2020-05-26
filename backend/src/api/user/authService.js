const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
    const erros = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

const login = ( req, res, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''

    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user, env. authSecret, {
                expiresIn: "1 day"
            })
            const { name, email } = user
            res.json({ name, email, token })
        } else {
            return res.status(400).send({ errors: ['User/Password invalid']})
        }
    })
}

const validateToken = (req, res, next) => {
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function (err, decoded) {
        return res.status(200).send({ valid: !err })
    })
}

const signup = (req, res, next) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''

    if (!email.match(emailRegex)) {
        return res.status(400).send({ errors: ['The e-mail informed has not valid'] })
    }

    if(!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                "Password needs: one uppercase letter, one lowercase letter, one number, one special caracter and size bettwen 6 - 20."
            ]
        })
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if (!bcrypt.compare(confirmPassword, passwordHash)) {
        return res.status(400).send({ errors: ['Password does not match.'] })
    }

    User.findOne({email}, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user) {
            return res.status(400).send({ errors: ['User already exists.'] })
        } else {
            const newUser = new User({ name, email, password: passwordHash })
            newUser.save(err => {
                if (err){
                    return sendErrorsFromDB(res, err)
                } else {
                    login(req, res, next)
                }
            })
        }
    })
}

module.exports = { loging, signup, validateToken }