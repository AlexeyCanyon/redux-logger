import axios from 'axios';
import { setIsFetching, setRepos } from '../../reducers/reposReducer';

export const getRepos = (searchQuery = "stars:%3E1") => {
  return async (dispatch) => {

    if (searchQuery.length === 0) {
      searchQuery = 'stars:%3E1'
    }
    dispatch(setIsFetching(true));
    const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`);
    console.log(response);
    dispatch(setRepos(response.data));
  };
};