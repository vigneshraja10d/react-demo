import './App.css';
import React from 'react';
import React, {Wel} from 'react';
import Map from './Map'
import { Route } from 'react-router-dom';
import App from './App'
import { render } from '@testing-library/react';
//import { switch, Route } from 'react-router-dom';

const Homepage = () =>(
    <div>
        <h1>WELCOME</h1>
    </div>
);
console.log(Homepage);

function Detail() {
    render()
    return(
    <div>
        <Route exact path='/' component={Homepage} />
    </div>
    )
    
}

export default Wel;