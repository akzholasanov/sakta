import axios from 'axios';

export const api = axios.create({
  headers: {
    Authorization: 'UDbOaBQmFJvumaeprJXtGF9BXsynxj6b7xGTHnknJNTAZ5aBfYRL8gDX',
    Accept: 'application/json',
  },
});