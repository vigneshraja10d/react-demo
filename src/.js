import React from 'react';
import './App.css';
import { Component } from 'react';
import App from './App';
import Page from './Page';


class Home extends React.Component {
   render() {
     return (
      <React.StrictMode>
         <div>
            <Page />
         </div>
      </React.StrictMode>
     );
   }
}
export default Home;