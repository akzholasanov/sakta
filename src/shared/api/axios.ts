import axios from 'axios';
import { API_KEY } from 'shared/consts';

export const api = axios.create({
  headers: {
    Authorization: API_KEY,
    Accept: 'application/json',
  },
});