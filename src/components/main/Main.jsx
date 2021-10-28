import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getRepos } from '../actions/repos';

import Repo from './repo/Repo';

import './Main.less'

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items);
  const isFetching = useSelector(state => state.repos.isFetching);
  const [searchValue, setSearchValue] = useState('');
  const searchHandler = () => {
    dispatch(getRepos(searchValue));
  };

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <div>
      <div>
        <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} type="text" className="search-input"/>
        <button type="button" onClick={() => searchHandler()} className="search-btn">Search</button>
      </div>
      {isFetching ? (
        <div className="fetching">
        </div>
      ) :
      repos?.map(item => (
        <Repo repo={item} />
      ))}
    </div>
  );
};

export default Main;
