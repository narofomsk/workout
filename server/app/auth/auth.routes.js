import express from 'express'
import { authUser } from './auth.controller.js'

const authRoutes = express.Router()
authRoutes.route('/login').post(authUser)

export default authRoutes