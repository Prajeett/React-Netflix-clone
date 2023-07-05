import axios from 'axios';

//send base request 

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',

});

// Example:
// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;