import Axios from 'axios';

const adress = 'https://api.pokemontcg.io/v1';

export async function sendRequest({ method, url }) {
  const response = await Axios({
    url: adress + url,
    method,
    timeout: 15500,
  })
    .then((res) => res)
    .catch((error) => {
      throw error;
    });

  return response;
}
