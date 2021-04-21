// imrc
import React, { Component } from 'react';
import './hello.css'
// ccc
class Hello  extends Component {

    // jsx
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       const mystyle={
           color:"red"
       }
        return (
            <header style={mystyle} > 

<h1>hellow world</h1>
<h3> hellow </h3>
</header>

          );
    }
}
 
export default Hello ;