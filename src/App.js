import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { AppDrawer } from './components/Drawer.Js/drawer';

const App = () => {
  return (
          <div className='app-wrapper'>
              <Header />
              <AppDrawer/>
                </div>
        )
  }
export default App; 