import axios from 'axios';

const baseURL = `https://api.randomuser.me/`

const FetchUser = async () => {
  try {
    const response = await axios.get(baseURL);
    console.log('data fetch result', response.data.results);
    const result = response.data.results;
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default FetchUser