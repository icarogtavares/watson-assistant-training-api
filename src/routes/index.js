const express = require('express')

const router = express.Router()

router.use('/message', mobileRoutes)

router.get('/', (req, res, next) => {
  res.send({ index: 'index route' })
})

module.exports = router
