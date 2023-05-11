import { useQuery } from 'react-query';
import axios from 'axios';

const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

export const useFetcher = (queryKey, url) => {
  return useQuery(queryKey, () => getData(url));
};
