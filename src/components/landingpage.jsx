import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from './profilepic.jpg';

class LandingPage extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{width:'100%', margin: 'auto'}}>
             <Grid className="landing-grid" id="landing">
            <Cell col={12}>
            <img src={profile} alt="pic" class="profile" />
                <div className="heading">
                    
                    <h1>Anuj Kharbanda</h1>
                    <hr/>
                <h3>Web Developing Enthusiast</h3>
                <hr/>
                <p> HTML | CSS | Javascript | jQuery | React | C | C++ </p>

                <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/anuj-kharbanda-a89431164" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Anuj2711" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
                </div>
            </Cell>  
          </Grid> 
            </div>
        );
    }
}
 
export default LandingPage;