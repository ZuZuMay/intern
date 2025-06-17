import React from 'react'; 
import './Toolbar.css'; 
const styles = {   
    toolbar: {      
       marginBottom: 20,    
     border: '3px solid red',    } } 
class Toolbar extends React.Component {   
     render() {   
         return (           
             <div style={styles.toolbar} className='toolbar'> 
             <h1 style={{backgroundColor:'blue',padding:10}}>Hello</h1>             
               {this.props.children}  
               
            </div>      

           );   
 } } 
export default Toolbar;