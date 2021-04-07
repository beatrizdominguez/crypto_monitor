const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const api = require('../tools/api');

router.get('/', asyncHandler(async (req, res) => {
  const response = await api.pingConnection()
  return res.send(response)
}))

router.get('/coinList', asyncHandler(async (req, res) => {
  const response = await api.getAllCoins()
  return res.send(response)
}))

router.get('/bitcoin', asyncHandler(async (req, res) => {
  const response = await api.getCoin('bitcoin')
  return res.send(response)
}))

// router.get('/', asyncHandler(async (req, res) => {
//   // return res.status(200).json({ message: 'ok' })
  
//   console.log('----------------------------')
//   console.log(`dashboard`)
//   const response = await axios.get('https://api.coingecko.com/api/v3/coins/list')
//   return res.status(response.status).send(response.data)
//   // return response
// }))


module.exports = router
