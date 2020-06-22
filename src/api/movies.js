import axios from 'axios';

export default axios.create({
  baseURL: 'http://scb-movies-api.herokuapp.com',
  headers: {
    'api-key': 'd92396fae7d4f667d687c1da49c800c79e3dd210'
  }
});
