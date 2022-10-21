import axios from 'axios';

export const getDatas = async () => {
  const response = await axios.get('http://localhost:4000/posts');
  return response.data;
};

export const getDataById = async id => {
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};
// npx json-server ./data.json --port 4000