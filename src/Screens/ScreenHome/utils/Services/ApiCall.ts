import { ajax } from 'rxjs/ajax';
import { FetchImageDataResponse } from '../type/interfaces';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '45184497-ebcc43428b5fcf50ae0b6a6d3';

export const fetchImageDataFromApi = () => {
  const apiUrl = `${API_URL}?key=${API_KEY}&q=flower&image_type=photo&per_page=10`;
  return ajax.getJSON<FetchImageDataResponse>(apiUrl);
};
