import React from 'react';
function Item(){
    return (
      <div>
        <li>Content</li>
      <li>{this.props.name},
      ${this.props.price}</li>
      </div>
    )
  }
  function Addform(){  
      nameRef = createRef();  
      priceRef = createRef();   
     const add = () => {       
       let name = this.nameRef.current.value;       
       let price = this.priceRef.current.value;       
        this.props.add(name, price);   
       }        
        return (         
          <div>               
            <input type="text" ref={this.nameRef} /><br />    
             <input type="text" ref={this.priceRef} /><br />           
             <button onClick={this.add}>Add</button>  
           </div>      

    )    };
function App(){
  state={
    items:[
      {id:1,name:'Su',price:5} ,     
      {id:2,name:'Thu',price:6},
    ]
  }
  nameRef = React.createRef();   
  priceRef = React.createRef();
  add = () => {  
    let id = this.state.items.length + 1;   
    let name = this.nameRef.current.value;      
    let price = this.priceRef.current.value
    this.setState({       
      items: [
        ...this.state.items,            
        { id, name: `Item ${id}`, price: 0.01 * id  }       
      ]  
    });
  } 
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          <Item name="Apple" price="30"/>
          {this.state.items.map(i=>{
            return(
              <Item 
              key={i.id}
              name={i.name}
              price={i.order}/>
            )
          })}
        </ul>
        <AddForm add={this.add}/>
      </div>
      )
  };
export default App;
