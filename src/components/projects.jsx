import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }

    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="projectt" id="projectt">
                <div style={{width:'100%', margin: 'auto'}}>
             
                <h1 className="project"><b>Projects</b></h1>
                <h4 className="abcd">Following are the <b>Projects</b> done by me:</h4>
                
                </div>
                <div style={{width:'100%', margin: 'auto'}}>
             <Grid className="project-grid">
             <Cell col={6}>
                <div className="projectss"> 
                    <ul><li>
                        <h5> A web app called Pixel art maker which lets user create a grid of square and 
                    apply colours to those grid representing their design (Made using pure JS) </h5>
                    </li> </ul> </div>
                </Cell>
                <Cell col={6}>
                <div className="projectss">
                <ul><li> <h5>a simple webpage that loads different images of cats using api 
                    and perform some functionality whenuser clicks on it </h5>
                    </li> </ul></div>
                </Cell>
                </Grid>
                </div>
                <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="project-grid">
                <br/> <br/>
                <Cell col={6}>
                    
                <div className="projectss">
                <ul><li><h5>A simple 2D breakout game. Again using pure JS </h5>
                </li> </ul></div>
                </Cell>
                <Cell col={6}>

                <div className="projectss"> 
                 <ul><li><h5>a simple webpage that loads different images of cats using api 
                    and perform some functionality whenuser clicks on it </h5>
                    </li> </ul></div>
                
                </Cell>
                </Grid>
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Projects;