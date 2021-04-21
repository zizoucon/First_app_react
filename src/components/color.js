import React, { Component } from 'react';
import './color.css'
import L from './1.jpg'
import  F from './frontend.png'
import  R from './react.svg'
import  H from './html5.svg'
import  C from './css.svg'
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
<img src={L} ></img>
 <img src={F} ></img>
 <div className='imgg'>
 <img src={R}></img>
 <img src={H}></img>
 <img src={C}></img>
 </div>
            </div>
        );
    }
}
 
export default Color;