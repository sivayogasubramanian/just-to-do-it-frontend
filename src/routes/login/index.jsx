import React, { useState, useEffect } from 'react';
import StartupLoadingScreen from '../../components/startupLoadingScreen';
import authAxios from '../../helpers/authAxios';
import Login from './Login';

const Landing = () => {
  const [isHerokuDynoAwake, setIsHerokuDynoAwake] = useState(false);
  useEffect(() => {
    authAxios
      .get('')
      .then((response) => {
        if (response.statusText === 'OK') {
          setIsHerokuDynoAwake(true);
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return <>{isHerokuDynoAwake ? <Login /> : <StartupLoadingScreen />}</>;
};

export default Landing;
