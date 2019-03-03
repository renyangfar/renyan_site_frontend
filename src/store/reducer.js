import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as loginRegisterReducer } from '../pages/loginRegister/store';
import { reducer as HomeReducer } from '../pages/home/store'

const reducer = combineReducers({
    header: headerReducer,
    loginRegister: loginRegisterReducer,
    home: HomeReducer,
});

export default reducer;
