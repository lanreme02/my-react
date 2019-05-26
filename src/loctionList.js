import React, { Component } from 'react';

 export const Country = ({countriesReducer=[],change=f=>f}) => 
<div style={{width:150, height:50, marginLeft:60,borderBottom:0,marginBottom:0,paddingBottom:0}}>
<label>choose a Country </label>
<select style={{width:150}} onChange={change}>
<option key={0} value=""> Select a Country </option>
    {
         countriesReducer.map((country,i) => 
             <option key={i+1} value={country.name}>   {country.name}   </option>
        )
    }
</select>
</div>


export const Cities = ({city=[],change=f=>f}) => 
<div className="up">
 {(city.length !== 0) ?
<div style={{width:150}}>
<select  style={{width:150}} onChange={change}>
<option key={0} value=""> Select a city </option>
    {
         city.map((city,i) => 
             <option key={i+1} value={city}>   {city}   </option>
        )
    }
</select>
</div>
: null}
</div>
