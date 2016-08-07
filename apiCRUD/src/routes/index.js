module.exports = (express) => {
	const router = express.Router();

	router.get('/status', (req, res) => {
		console.log("route hit", (req, res));
		res.json({
			healthy: true,
		})
	});

	app.use('/api/', require('./api/user')(express));


	return router;
}