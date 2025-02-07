import axios from 'axios';

export const fetchData = async () => {
  return await axios.get('http://104.248.100.4:3001/api/data');
};