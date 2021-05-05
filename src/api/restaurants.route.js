import RestaurantsCtrl from './restaurants.controller.js'
import express from 'express'

const router = express.Router()

router.route('/').get(RestaurantsCtrl.apiGetRestaurants)

export default router
