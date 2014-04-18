module.exports = function(router) {

	router.get('/venues', function(req, res) {
		res.send('Get Venues');	
	});

	router.get('/venue/:venueId', function(req, res) {
		res.send('Get A Venue');	
	});

	router.post('/venue', function(req, res) {
		res.send('Create Venue');	
	});

	router.put('/venue/:venueId', function(req, res) {
		res.send('Update Venue');	
	});

	router.delete('/venue/:venueId', function(req, res) {
		res.send('Delete Venue');	
	});

};