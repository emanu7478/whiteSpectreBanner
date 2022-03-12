import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigator from './navigation';
import { fetchBanners } from './redux/banners/actions';

function AppRoute() {
  const dispatch = useDispatch();

  const componentDidMount = () => {
    dispatch(fetchBanners());
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return <Navigator />;
}

export default AppRoute;
