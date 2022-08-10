import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/global.css'
import Routers from './routes'
import Header from './components/header/header';

function App() {
  return (
    <Router>
      <Header />
      <Routers/>
    </Router>
  )
}

export default App;
