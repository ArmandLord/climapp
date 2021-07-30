import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ClimAppInfo, CardId } from './Pages'
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat Alternates', sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles/>
      <Switch>
          <Route component={App} path="/" exact/>
          <Route component={ClimAppInfo} path="/info" exact/>
          <Route render={({match})=> <CardId id={match.params.id}/>} path="/card/:id" exact/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
