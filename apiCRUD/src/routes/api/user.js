const db = require('./db');

exports.create = (payload, err, success) => {
	db.user.creates(payload).then(success).catch(err);
}