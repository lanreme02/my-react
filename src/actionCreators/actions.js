import c from '../constants';
const addLocationAction = (countryName, cities=[]) => {
    
    return {
        type : c.ADD_COUNTRY,
        countryName,
        cities
    }
}

export default addLocationAction;