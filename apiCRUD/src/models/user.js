const db = require('./db');

exports.create = (payload, err, success) => {
	db.user.create(payload).then(success).catch(err);
}


exports.findAll = (err, success) => {
	db.user.findAll().then(success).catch(err);
}

exports.find = (payload, err, success) => {
	db.user.find({
		where: {
			id: payload.id
		},

		//this finds the relations in sequelizer
		include:[{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}


exports.update = (err, success) => {
	db.user.find({
		where: {
			id: payload.id
		},

	}).then(existingData =>{
		existingData.updateAttributes(payload).then(success).catch(err);
	}).catch(err);
}

exports.destroy = (err, success) => {
	db.user.destroy({
		where: {
			id: payload.id,
		},
	}).then(success).catch(err);
}
