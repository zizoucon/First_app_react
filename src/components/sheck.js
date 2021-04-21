import React, { Component } from 'react';
import './sheck.css'
class Sheck extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='conatainer'>


<div>
     <h1> SUBSCRIBE</h1> 
     <h3> Sign up with your
     email adress to receive news update</h3> 
 </div>
     
<div className='inputext'>
    
        <input type='text' value='First Name'></input>
        <input type='text' value='Last Name'></input>
        <input type='text' value='Email'></input>
        
       
</div>
<div><button> Subscribe</button></div>
            </div>
         );
    }
}
 
export default Sheck;