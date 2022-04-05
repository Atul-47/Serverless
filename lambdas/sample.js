const Responses = require('./API_Responses')
exports.handler = async event => {
    console.log('event', event)

    if(!event.pathParameters || !event.pathParameters.ID){
        // Paramete Missing Error Response
        return Responses._400({message: 'Parameter missing'});
    }

    const ID = event.pathParameters.ID;

    if(sampleData[ID]){
        // Successfull Response
        return Responses._200(sampleData[ID]);
    }

    // Error Response
    return Responses._400({message: 'No data found'});
}

const sampleData = {
    123 : {name: 'First', next: 'abc'},
    abc : {name: 'Last', next: '123'},
};