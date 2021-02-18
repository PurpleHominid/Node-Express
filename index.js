const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 4000;

const dba = require("./dbsqlite.js");
let db = dba.connect();


app.use(express.static(`ui`)); //setup to serve static files (css, images, etc)
app.use(express.json({ limit: `1mb` })); //set a limit to avoid excessive data being posted
app.use(express.urlencoded({ extended: true })); //use the 'qs library' to parse json data


app.get(`/`, function (request, response) {
	const options = {
		root: __dirname, // __dirname specifies the folder of the currently executing script
	};
    response.sendFile(`/ui/default.html`, options); //return the file in the current folder
})


app.get(`/init/:uname`, function (request, response) {
	//get supports params and query
	console.log("/init get request received");
	const data = request.body;
	
	console.log("----");
	console.log(data);
	console.log("----");

	console.log("Request param uname: " + request.params.uname);
	console.log("Request query answer: " + request.query.answer);
	console.log("Request body answer: " + request.body.answer);
	
	//prepare response
	dba.init(db);

	response.json({
		status: "success",
		value: "replied from GET",
	})
	response.end();
});


app.post(`/init/:uname`, function (request, response) {
	//post supports params and body
	console.log("/init post request received");
	const data = request.body;
	
	console.log("----");
	console.log(data);
	console.log("----");

	console.log("Request param uname: " + request.params.uname);
	console.log("Request query answer: " + request.query.answer);
	console.log("Request body answer: " + request.body.answer);
	
	//prepare response
	dba.init(db);

	response.json({
		status: "success",
		value: "replied from POST",
	})
	response.end();
});


app.put(`/init/:uname`, function (request, response) {
	//put supports params and body
	console.log("/init put request received");
	const data = request.body;
	
	console.log("----");
	console.log(data);
	console.log("----");

	console.log("Request param uname: " + request.params.uname);
	console.log("Request query answer: " + request.query.answer);
	console.log("Request body answer: " + request.body.answer);
	
	//prepare response
	dba.init(db);

	response.json({
		status: "success",
		value: "replied from PUT",
	})
	response.end();
});


app.patch(`/init/:uname`, function (request, response) {
	//patch supports params and body
	console.log("/init patch request received");
	const data = request.body;
	
	console.log("----");
	console.log(data);
	console.log("----");

	console.log("Request param uname: " + request.params.uname);
	console.log("Request query answer: " + request.query.answer);
	console.log("Request body answer: " + request.body.answer);
	
	//prepare response
	dba.init(db);

	response.json({
		status: "success",
		value: "replied from PATCH",
	})
	response.end();
});


app.delete(`/init/:uname`, function (request, response) {
	//delete supports params and body
	console.log("/init delete request received");
	const data = request.body;
	
	console.log("----");
	console.log(data);
	console.log("----");

	console.log("Request param uname: " + request.params.uname);
	console.log("Request query answer: " + request.query.answer);
	console.log("Request body answer: " + request.body.answer);
	
	//prepare response
	dba.init(db);

	response.json({
		status: "success",
		value: "replied from DELETE",
	})
	response.end();
});


app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});