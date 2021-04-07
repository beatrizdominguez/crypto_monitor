const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const statusRouter = require('express').Router()
const dashboard = require('./dashboard')

statusRouter.post('/', asyncHandler(async (req, res) => {
  const {body} = req
  return res.status(200).json({...body})
}))

statusRouter.get('/', asyncHandler(async (req, res) => {
  return res.status(200).json({message: 'ok'})
}))

router.use('/dashboard', dashboard)

router.use('/', (req, res) => {
    res.send('Hello World2! index')
  })
  


module.exports = router
