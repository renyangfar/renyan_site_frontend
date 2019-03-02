import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as loginRegisterReducer } from '../pages/loginRegister/store';

const reducer = combineReducers({
    header: headerReducer,
    loginRegister: loginRegisterReducer,
});

export default reducer;
