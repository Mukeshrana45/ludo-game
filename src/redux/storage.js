import * as MMKVModule from 'react-native-mmkv';

console.log('MMKVModule =', MMKVModule);

export default {
  setItem: () => Promise.resolve(),
  getItem: () => Promise.resolve(null),
  removeItem: () => Promise.resolve(),
};