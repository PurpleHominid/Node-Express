			function execute(method, route, data) {
				const options = {} ; 

				switch (method.toLowerCase()) {
					case "get":
						route += createQueryString(data); 
						break;

					case "post":
						options = {
							method: method,
							headers: {
								"content-type": "application/json"
							},
							body: JSON.stringify(data),
						};
						break;
					
					case "put":
						break;
					
					case "patch":
						break;
					
					case "delete":
						break;
				}
				
				const response = fetch(route, options).then(response => {
					apiresponse(response + " got here");
					console.log(response);
				});
			}

			function processrequest(object) {
				//process a request

				let elements, method, route;
				let data = {};
				try { 
					elements = document.forms[object.form.id].elements;
					method = object.form.method;
					route = object.form.action;
				}
				catch(err) { 
					console.error("Request failed: " + err.message); 
					return false; //return false to prevent default submit behaviour
				}
				
				//iterate input values
				console.log("process request accepted using HTTP Verb (metho): " + method + "\nRoute: " + route);
				for (i = 0; i < elements.length; i++){
					switch(elements[i].tagName.toLowerCase()) {
						case "input":
							if(isnumericdata(elements[i].value)) {
								elements[i].value = Number(elements[i].value); //convert value to numeric
							}
							data[elements[i].name] = elements[i].value; //update the data object with the key-value pair
							console.log("building request data: " + elements[i].name + " = " + elements[i].value)
							break;
					}
				}	
				
				execute(method, route, data);

				return false; //return false to prevent default submit behaviour
			}