const courseModel = require('../models/courseModel')
const express = require('express')
const coursesRouter = express.Router()

coursesRouter.get('/', async(req, res) => {
  const allCourses = await courseModel.find().exec()
  res.json(allCourses)
})



module.exports = coursesRouter


