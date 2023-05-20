const User = require('../models/User')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/utils')

const registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    res.send({ msg: error.message })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email && !password) {
      return res.send('please provide an email or password')
    }
    const user = await User.findOne({ email: email })
    if (password !== user.password) {
      return res.json({ msg: 'password not matched' })
    }
    const token = jwt.sign({ user }, 'JWT-SECRET', { expiresIn: 30 })
    const oneDay = 1000 * 60 * 60 * 24
    res.cookie('userToken', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
    })
    res.status(200).json({ user: user.email })
  } catch (error) {
    console.log(error)
    res.send({ msg: error.message })
  }
}

const getAuthUser = async (req, res) => {
  res.json({ msg: 'yes! i am authorize user' })
}

module.exports = { registerUser, loginUser, getAuthUser }
