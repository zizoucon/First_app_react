import React, { Component } from 'react';
import './color.css'
class Color extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="container">
<div className="itm1">color 1</div>
<div className="itm2">color 2</div>
<div className="itm3">color 3</div>
<div className="itm4">color 4</div>


            </div>
        );
    }
}
 
export default Color;