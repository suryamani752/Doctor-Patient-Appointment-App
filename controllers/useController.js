
const userModel = require('../models/userModels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//login callback functionn
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(200).send({
                message: 'user not found',
                success: false
            })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(200).send({
                message: 'Invalid Email or Password',
                success: false
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.status(200).send({
            message: 'login success',
            success: true,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: `error is login controller ${error.message}`
        })
    }
}

//register callback function
const registerController = async (req, res) => {
    try {
        const exisitingUser = await userModel.findOne({ email: req.body.email })
        if (exisitingUser) {
            return res.status(200).send({
                message: 'user already exist',
                success: false
            })
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        req.body.password = hashedPassword
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({
            message: "register successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: `Register controller ${error.message}`
        })
    }
}


module.exports = { loginController, registerController }