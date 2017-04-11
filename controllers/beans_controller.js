var Bean = require('../models/bean.js')

// GET /api/beans
// INDEX action to display all beans
function index(req, res) {
	Bean.find({}, function(err, beans){
    // return 404 if there's an error:
    if(err) res.status(404).send(err)

    // otherwise send json back with 200 success header:
    res.status(200).send(beans)

		// if (err) throw err
		// res.json(beans)
	})
}

// POST /api/beans
// CREATE action to add a new bean
function create(req, res, next) {
	var bean = new Bean(req.body)

	bean.save(function(err, bean) {
    // return 500 if there's an error:
    if(err) res.status(500).send(err)

    // otherwise send bean json back with 201 create success header:
    res.status(201).send(bean)

    // if (err) throw err
		// res.json(bean)
	})
}

// GET /api/beans/:id
// SHOW action to return a single bean
function show(req, res) {
	Bean.find({_id: req.params.id}, function(err, bean){
    // return 404 if there's an error:
    if(err) res.status(404).send(err)

    // otherwise send bean json back with 200 success header:
    res.status(200).send(bean)

    // if (err) throw err
		// res.json(bean)
	})
}

// PATCH /api/beans/:id
// UPDATE action to update a single bean
function update(req, res) {
	Bean.findById({_id: req.params.id}, function(err, bean) {
		// Return 404 if bean not found:
		if(err) res.status(404).send(err)

		// Only update attributes submitted, don't null anything out:
    if(req.body.name) bean.name = req.body.name
    if(req.body.quantity) bean.quantity = req.body.quantity

    bean.save(function(err) {
			// return 500 if there's an error:
	    if(err) res.status(500).send(err)

	    // otherwise send bean json back with 200 success header:
	    res.status(200).send(bean)
    })
  })
}

// DELETE /api/beans/:id
// DESTROY action to delete a single bean
function destroy(req, res) {
	Bean.remove({_id: req.params.id}, function(err){
    // return 500 if there's an error:
    if(err) res.status(500).send(err)

    // otherwise send bean json back with 200 success header:
    res.status(200).send({message: "Bean deleted successfully"})

    // if (err) throw err
		// res.json({success: true, message: 'BYE, FELICIA!'})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}
