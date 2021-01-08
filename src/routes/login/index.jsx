// React and helpers
import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { connect } from 'react-redux';
// Components
import StartupLoadingScreen from '../../components/startupLoadingScreen';
import Login from './Login';

const Landing = ({ isHerokuDynoAwake }) => {
  const { wakeHerokuDyno } = useAuth();
  useEffect(() => {
    wakeHerokuDyno();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{isHerokuDynoAwake ? <Login /> : <StartupLoadingScreen />}</>;
};

const mapStateToProps = (state) => {
  return {
    isHerokuDynoAwake: state.isHerokuDynoAwake,
  };
};

export default connect(mapStateToProps)(Landing);
