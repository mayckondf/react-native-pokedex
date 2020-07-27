/* eslint-disable no-use-before-define */
import { sendRequest } from '~/api';

export async function GetPokemons({ name, set, type, subtype }) {
  const method = 'get';
  let url = '/cards?supertype=pokemon';

  if (name || set || type || subtype) {
    url += '&';
    if (name) url += `name=${name}`;
  }

  const response = await sendRequest({ method, url });

  const ordernedList = await ordenateCards(response.data.cards);

  return ordernedList;
}

async function ordenateCards(cards) {
  const ordened = await cards.sort((a, b) => a.name.localeCompare(b.name));
  return ordened;
}
