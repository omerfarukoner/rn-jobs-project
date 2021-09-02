import { combineReducers } from 'redux'
import tokenReducer from './token.reducer'
import jobReducer from './job.reducer'
import jobDetailsReducer from './job.details.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  tokenReducer,
  jobReducer,
  jobDetailsReducer
})

export default reducers
