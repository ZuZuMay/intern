import React  from "react";
class Toolbar extends React.Component {      
    render() {     
           return (  
            <div>     
             
                  
                </div>);
    } 
}
 class App2 extends React.Component {   
     render() {       
         return (           
             <div>                
                <Toolbar>                 
                    <h1>Hello React</h1>     
                   <h2>Component composition</h2>       
                </Toolbar>         
            </div>       
                 )  
              } 
}
export default App2;