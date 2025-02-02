import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/inventories' exact element={<InventoryList />}></Route>
          <Route path='/inventories/:id' exact element={<InventoryEdit />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
