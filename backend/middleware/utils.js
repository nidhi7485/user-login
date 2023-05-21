const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.cookies.userToken

  if (!token) {
    return res.status(401).json({ message: 'No token provided' })
  }

  jwt.verify(token, 'JWT-SECRET', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    req.user = decoded
    next()
  })
}

module.exports = verifyToken
