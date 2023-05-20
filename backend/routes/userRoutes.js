const express = require('express')

const router = express.Router()
const verifyToken = require('../middleware/utils')
const { registerUser, loginUser } = require('../controller/userController')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/protected', verifyToken, (req, res) => {
  const user = req.body
  res.json({ message: 'You have access to this protected route', user })
})
module.exports = router
