import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from './profilepic.jpg';


class Headerr extends Component {

    state = {      }

    render() { 
        return ( 
            <React.Fragment>
                
                <div style={{width:'100%', margin: 'auto'}}>
             <Grid className="header-grid">
                 <Cell col={2}> </Cell>
                 <Cell col={2}> 
                 <img src={profile} alt="pic" class="profile2" /></Cell>
            <Cell col={5}>
                <div className="headerr">
                <h2>About Me:</h2>
                <h4>I'm a student studying at BITS Pilani Hyderabad Campus.
                    I have currently completed my Second Year pursuing M.Sc. Mathematics and B.E. CSE. 
                    I have interest in Web Development and currently I am doing Front-End Web Development. 
                    After gaining a good experience in Front-End Web Development, I would love to start with Back-End Web Development</h4>
                    <br/></div>
                    
                        <div className="headerr"><h4><span className="ccd">Contact Details:</span><br/>
                        <ion-icon name="call"></ion-icon> 9760927014<br/>  
                        <a href="mailto:anuj.kharbanda01@gmail.com" className="contact-link">
                        <ion-icon name="mail"></ion-icon> anuj.kharbanda01@gmail.com</a></h4></div>
                    
                    </Cell>
                    <Cell col={3}> </Cell>
            </Grid>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Headerr;