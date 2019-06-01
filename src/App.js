import React from 'react';
import './App.css';
import Main from './components/main';
import LandingPage from './components/landingpage';
import Headerr from './components/header';
import Projects from './components/projects';
import {Link} from 'react-router-dom';
import {  animateScroll as scroll } from "react-scroll";
//import { toElement as scrollToElement } from '@utils/scroll';

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" id="navv" title="My Profile" scroll>
            <Navigation>
              <a href="#landing">
                
                  <div className="navLink">Home</div> </a>
                <a href="#projectt">
                  <div className="navLink">Bio</div> </a>
              </Navigation>
        </Header>
        <Drawer title="My Profile">
        <Navigation>
              <a href="#landing">
                
                  <div className="navLink">Home</div> </a>
                <a href="#projectt">
                  <div className="navLink">Bio</div> </a>
              </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" >
              <main>
            <LandingPage/>
            <Headerr/>
            <Projects/>
            </main>
            </div>
        </Content>
    </Layout>
</div>
  );
} 

export default App;
