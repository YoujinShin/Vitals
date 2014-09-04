var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define astronaut schema
var VitalSchema = new Schema({
	slug : { type: String, lowercase: true, required: true, unique: true },
	height : String,
	weight : String,
	bmi: String,
	bpm: String,
	temp: String,
    lastupdated : { type: Date, default: Date.now },
});

// export 'Astronaut' model
module.exports = mongoose.model('Vital', VitalSchema);