const db = require('./db');

exports.create = (payload, err, success) => {
	db.user.create(payload).then(success).catch(err);
}


exports.findAll = (err, success) => {
	db.user.findAll().then(success).catch(err);
}

