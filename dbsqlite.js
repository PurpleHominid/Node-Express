const database = require('better-sqlite3');

//const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
//console.log(row.firstName, row.lastName, row.email);

function connect() {
	const dbinstance = `./db/adaboard-sqlite.db`;
	//verbose enables a function that gets called with every executed instruction; default: null
	//timeout sets the max milliseconds timer to wait when executing queries on a locked database, before throwing a SQLITE_BUSY error; default: 5000
	let db = new database(dbinstance, { 
	//	verbose: console.log, 
		timeout: 1500 
	});

	return db;
}

function init(db) {
	let schema = "CREATE TABLE IF NOT EXISTS 'Users' ('userid' INTEGER NOT NULL, 'friendlyname' VARCHAR(50), 'emailaddress' VARCHAR(320) NOT NULL UNIQUE, 'password' VARCHAR(256) NOT NULL, 'admin' INTEGER(1), 'lastlogin' INTEGER(4) DEFAULT (strftime('%s','now')), PRIMARY KEY ('userID'));";
	db.exec(schema);
}

module.exports = { 
	connect,
	init
}