import { createStore,
    combineReducers,
    applyMiddleware } from 'redux'
import { countriesReducer } from '../reducers/reducer';


const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    console.log("logger Before")
    result = next(action)
    console.log("logger After")
    
    console.groupEnd()
}

const saver = store => next => action => {
    console.log("saver Before")
    let result = next(action)
    console.log("saver after")
    sessionStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}


const storeFactory = (initialState) =>
    applyMiddleware(logger, saver)(createStore)(
                                        combineReducers({countriesReducer}),
                                        (sessionStorage['redux']) ?
                                        JSON.parse(sessionStorage['redux']) :
                                        initialState
)
export default storeFactory