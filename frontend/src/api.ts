import axios from 'axios';

export const fetchData = async () => {
  return await axios.get('http://159.223.250.23:3001/api/data');
};