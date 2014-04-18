module.exports = function(router) {
	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function(req, res) {
		res.send('Get Resource');	
	});

	router.post('/', function(req, res) {
		res.send('Create Resource');	
	});

	router.put('/', function(req, res) {
		res.send('Update Resource');	
	});

	router.delete('/', function(req, res) {
		res.send('Delete Resource');	
	});
};