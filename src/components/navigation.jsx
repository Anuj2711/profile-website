import React, { Component } from 'react';
import './navigation.css';


class Navigation extends Component {



    mystyles={
        fontWeight:'normal',
        fontSize:'50px'
    
    }

    onMouseOver = (event) => {
        const el = event.target;
        let colorhex = [
          "#7AF377",
          "#3498DB",
          "#F1C530",
          "#F29C29",
          "#8E44AD",
          "#4AA086",
          "#E74C3C",
          "#65CC71",
          "#D3541B",
          "#EB4367",
          "#74F7D9",
          "#DDA8FC"
        ];
        el.style.color = colorhex[Math.floor(Math.random() * 12)];
        el.style.fontWeight="bold";
      };
      
      onMouseOut = (event) => {
        const el = event.target;
        let black = "#000000";
        el.style.color = black;
        el.style.fontWeight="normal";
      };
      

 
    render() { 
        const sections=["Home","Projects"];
        const links=sections.map(section=>{
            return(<li key={section} style={this.myStyles}><a href="#" onMouseEnter={(event) => this.onMouseOver(event)}
                        onMouseOut={(event) => this.onMouseOut(event)}>
                        {section}</a></li>);
        });
        return (  
            <React.Fragment>
                <nav>
                    <h1>My Profile</h1>
                    <ul>
                      {links}  
                   </ul>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default Navigation;
