import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const configureStore = () => {
  return createStore(
    RootReducer,
    MasterMiddleware
  );
};

export default configureStore;
