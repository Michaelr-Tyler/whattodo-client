/**
 * Basic fetch wrapper to automate repetitive fetch tasks.
 * @param {String} location URL location to make the request to.
 * @param {String} method HTTP verb to use for the request.
 * @param {Object} body Body of the request, if POST or PUT
 * @returns {Promise} Promise returned by underlying fetch call.
 */

    //set up a function to handle requests to server
export const request = async (location, method = 'GET', body) => {
    //store the auth token in header so requests will bre allowed
    const headers = {
      'Authorization': `Token ${localStorage.getItem('user_token')}`
    };
    //if the method is a PUT or POST add Content-Type key to the header object
    // and set its value to applicatio/json
    if(method === 'POST' || method === 'PUT') {
      headers['Content-Type'] = 'application/json';
    }
    //create an options object to be passed along with the reques
    const options = {
      method,
      headers
    };
    //If a payload needs to be passed add that to the options object
    if(body) {
      options.body = JSON.stringify(body);
    }
  
    return await fetch(location, options);
  };
  

  export const BASE_URL = `http://localhost:8000/`