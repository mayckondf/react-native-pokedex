import React from 'react';
import { useStore } from 'react-redux';
import ViewController from './viewController';
import ViewModel from './viewModel';

const Main = () => {
  const store = useStore((state) => state);
  const viewModel = new ViewModel(store);

  return <ViewController viewModel={viewModel} />;
};

Main.options = ViewController.options;

export default Main;
