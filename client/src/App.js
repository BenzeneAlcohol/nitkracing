import Home from './pages/Home/Index';
import Header from './components/Header/index';
import './App.css';
import {useState} from 'react';
import Footer from './components/Footer/index';
import React from 'react';
import About from "./pages/About/Index"
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Drawer from './components/Drawer/Drawer';

/**
 * Adds two numbers together.
 * @return {JSX} Returns the main JSX code.
 */
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false)

  const handleClose = ()=>{
    setOpen(false)
  }

  const handleOpen = ()=>{
    setOpen(true)
  }

  return (
    <div className="App">
      <Header handleDrawerOpen={handleOpen} handleDrawerClose={handleClose} isVisible={isVisible}></Header>
      <Drawer handleClose={handleClose} open={open}/>
      <Switch>
       
       <Route exact path="/">
         <Home setIsVisible={setIsVisible}></Home>
       </Route>
       <Route exact path="/About">
         <About  isVisible={isVisible} setIsVisible={setIsVisible}/> 
       </Route>
      </Switch>


      <Footer/>
    </div>
  );
}

export default App;
