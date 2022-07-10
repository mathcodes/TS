function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', function (response) {
    console.log(response);
    return true;
});
//  a function type is a function that returns a function