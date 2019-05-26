import React, { Component } from 'react';
import {Country,Cities} from './loctionList';
import constants from './constants';
import storeFactory from './store/index';
import { createStore, combineReducers } from 'redux';
import { countriesReducer , countryReducer } from './reducers/reducer';
import locationsData from './data';
import addLocationAction from './actionCreators/actions';

class App extends Component {

  
      constructor(props){

        super(props)

        this.state = {
          country:'',
          city:Array(0)
        }
        this.change = this.change.bind(this);
        this.cityChange = this.cityChange.bind(this);  
       // this.testStore = this.testStore.bind(this);
      }
     
  change(e){

    this.setState({city:Array(0)} )
      this.setState({country:''});

    var cities;
    const {countriesReducer} = this.props.store.getState();
    countriesReducer.map(x => {
      if( x.name === e.target.value.trim())
       cities =[...x.cities];
    })
    
    if(cities)
    this.setState({city:cities.slice()})
    this.setState({country:e.target.value.trim()})
   
  }

  cityChange(e){   
    this.setState({city:[]})
    this.setState({country:''})
    this.props.store.dispatch(addLocationAction("England",['London','Brighton','Manchester']));
  }

  /*
  componentDidMount(){
    this.testStore();
  }
*/
  render() {
    const {countriesReducer} = this.props.store.getState();
    return (
      <div className="App">
       <div>
        <Country countriesReducer = {countriesReducer} change={this.change}></Country>
        <Cities city ={ this.state.city}  change={this.cityChange} ></Cities>
       </div>
      </div>
    );
  }

 
  //
           
  
}

export default App;
