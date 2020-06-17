import axios from 'axios';

export default axios.create({
  baseURL: 'http://scb-movies-api.herokuapp.com',
  headers: {
    'api-key': 'b281db381841c6ec99a6183c9945d76fb6634d60'
  }
});
