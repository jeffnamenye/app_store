const user = require('../../models/user');


module.exports = (express) => {
	const router = express.Router();

	//this reads all users
	router.get('/users', (req, res) => {
		user.findAll((err) => {
			res.status(500).json(err);
		}, (data) =>{
			res.status(200).json(data);
		})

		
	});

	//this reads a single users
	router.get('/users/:id', (req, res) => {
		req.body.id = req.params.id;
		user.find(req.body, (err) => {
			res.status(500).json(err);
		}, (data) =>{
			res.status(200).json(data);
		})

		
	});

	//delete user
	router.post('/users/:id', (req, res) => {
		req.body.id = req.params.id;
		user.destroy(req.body, (err) => {
			res.status(500).json(err);
		}, (data) =>{
			res.status(200).json(data);
		})

		
	});

	//update users

	router.post('/users/:id', (req, res) => {
		req.body.id = req.params.id;
		user.update(req.body, (err) => {
			res.status(500).json(err);
		}, (data) =>{
			res.status(200).json(data);
		})

		
	});

	//create
	router.post('/users', (req, res) => {
		user.create(req.body, (err) => {
			res.status(500).json(err);
		}, (data) =>{
			res.status(200).json(data);
		})
	});

	return router;
}