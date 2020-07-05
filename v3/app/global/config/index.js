'use strict';

module.exports = {

	server: {
		PORT: process.env.PORT || 1221,
	},

	database: {
		HOST: process.env.MONGODB || 'mongodb://Cvele:cveledb1@ds129914.mlab.com:29914/posts',
	},

};
