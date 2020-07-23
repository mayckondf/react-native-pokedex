import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'Pokedex',
    createSocket: (path) => new ReactotronFlipper(path),
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
