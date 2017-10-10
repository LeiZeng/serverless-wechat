'use strict';
module.exports.oauth = (event, context, callback) => {
    var redirection = '/oauth/oauth-wechat-prod-hello';
    if (event.queryStringParameters) {
        if (event.queryStringParameters.code) {
        }
    }
    else {
    }
    context.succeed({ location: redirection });
};
module.exports.hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: 'Hello world!'
        }),
    };
    callback(null, response);
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
