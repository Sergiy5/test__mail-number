import axios from 'axios';

const URL = 'http://localhost:4000/';


let cancelToken;

export const getUser = async user => {
if (cancelToken) {
  cancelToken.cancel();
}
  cancelToken = axios.CancelToken.source();

  const res = await axios.get(`${URL}users`, {
    params: { q:  user },
    cancelToken: cancelToken.token,
  });
  return res;
};
