var {index, create, show, update, destroy} = require('../controllers/beans_controller.js'),
	express  = require('express'),
	router   = express.Router()

// /api/beans/ routes:
router.route('/')
	.get(index)
	.post(create)

// /api/beans/:id routes:
router.route('/:id')
	.get(show)
	.patch(update)
	.delete(destroy)

module.exports = router

// NOTE: This object destructuring (line 1) is useful for drying up code.
// It will only work with nodejs versions > 6.0
// Also it will work only if you either use different routes files for each resource
// or if you name the functions differently in your routes files
// ex: 'getAllUsers' instead of 'index'
