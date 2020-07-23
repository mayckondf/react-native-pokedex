import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'ProjectAlmanaque',
      storage: AsyncStorage,
      whitelist: ['auth', 'notifications', 'friends', 'tournamentActions'], // TODO add language
    },
    reducers
  );

  return persistedReducer;
};
