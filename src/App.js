import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Join from './Components/Join/Join'
import Chat from './Components/Chat/Chat'

import GlobalStyle from './Styles/Global'

const App = () => (
  <Router>
   
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
    <GlobalStyle />
    
  </Router>
);

export default App;