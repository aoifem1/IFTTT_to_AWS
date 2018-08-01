console.log('Loading function');
var AWS_IOT_ENDPOINT = "aws_endpoint";

 
/** 
 * Demonstrates how to receive HTTP JSON file from IFTTT using webhooks. 
 * Results are printed to the screen. 
 * Code can be tested either via 'Test' options in AWS Lambda, or 'Test' options in API Gateway. 
 * 
 */
exports.handler = (event, context, callback) => {
  
    console.log('Received event:', JSON.stringify(event, null, 2)); // 'event' contains JSON file from IFTTT

    // Return appropriate HTTP code 
    // This is only needed if API Gateway is setup as proxy  
    const done = (err, res) => callback(null, {  
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });


    switch (event.httpMethod) {
        // IFTTT sends trigger as POST request 
        case 'POST':
            console.log('POST received');            
        	var json = JSON.parse(event.body);   // turn JSON file into JS object
        //	var json_key = Object.keys(json)[0]; // find the first key of json file
        //	var json_body = json[json_key];      // find the first value of the key-value pair 
    	
        	
        	var key;
            for (key in json) {                 // loop through all JSON key-value pairs
                if (json.hasOwnProperty(key)) {
                    console.log(key + " = " + json[key]);
                }
            } 
            
            done(null,'OK'); // Response to IoT Gateway => done (error, response.msg);
            break;
        default:                    // if HTTP method other than 'POST' is used 
            done(new Error(`Unsupported method "${event.httpMethod}"`)); // Response to IoT Gateway => done (error);
    }
};
