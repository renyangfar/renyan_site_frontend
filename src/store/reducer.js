import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as loginRegisterReducer } from '../pages/loginRegister/store';
import { reducer as HomeReducer } from '../pages/home/store';
import { reducer as SearchReducer } from '../pages/search/store';
import { reducer as DetailReducer } from '../pages/detail/store';

const reducer = combineReducers({
    header: headerReducer,
    loginRegister: loginRegisterReducer,
    home: HomeReducer,
    search: SearchReducer,
    detail: DetailReducer,
});

export default reducer;
