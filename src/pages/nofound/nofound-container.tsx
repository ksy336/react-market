import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoFoundView from './nofound-view';

const NoFoundContainer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/', { replace: true });
  };

  return <NoFoundView handleClick={handleClick} />;
};
export default NoFoundContainer;
