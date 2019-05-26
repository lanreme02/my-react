import c from '../constants'

export const countryReducer = (state={}, action) => {
    const cities =[...action.cities]
    switch(action.type){
        case c.ADD_COUNTRY:
        return {
            name:action.countryName,
            cities
        }
        default:
        return state;
    }


}

export const countriesReducer = (state=[], action) => {

    switch(action.type){
        case c.ADD_COUNTRY:
        return [
            ...state,
            countryReducer({},action)
        ]
        default:
        return state;
    }
}
