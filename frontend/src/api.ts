import axios from 'axios';

export const fetchData = async () => {
  return await axios.get('http://188.166.139.82/api/data');
};