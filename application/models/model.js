var Mongoose = require('mongoose');
var Schema = Mongoose.schema;

var VenueSchema = new Schema({
  name:  String,
  description: String,
  contact: {
  	phone: String,
  	email: String
  },
  categories: { 
  	grapeVariety: String, 
  	classification: String 
  },
  location: {
	address: String,
	crossStreet : String,
	lat : Number,
	lng : Number,
	postalCode : String,
	cc : String,
	city : String,
	state : String,
	country : String
  },
  url: String,
  timeFrames: [{
  	days: String,
  	open: [{
  		renderedtime: String
  	}]
  }]
});

module.exports = mongoose.model('Venue', VenueSchema);
