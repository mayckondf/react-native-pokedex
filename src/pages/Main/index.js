import React from 'react';
import { useStore } from 'react-redux';
import PropTypes from 'prop-types';
import ViewController from './viewController';
import ViewModel from './viewModel';

const Main = ({ navigation }) => {
  const store = useStore((state) => state);
  const viewModel = new ViewModel(store);

  return <ViewController viewModel={viewModel} navigation={navigation} />;
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Main.options = ViewController.options;

export default Main;
