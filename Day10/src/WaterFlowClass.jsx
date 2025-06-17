import React from "react";
class Title extends React.Component {    
    render() {        
        return  <h1>{this.props.name}</h1>;  
      } } 
class Header extends React.Component { 
   render() {       
     return (           
         <div>                
            <Title name={this.props.name} />   
         </div>  )  
           } } 
class App1 extends React.Component { 
    render() {    
    return (      
        <div>        
            <h1>Hello</h1>
             <Header name="App Title" />    
         </div>     
   )    } }
 export default App1;
