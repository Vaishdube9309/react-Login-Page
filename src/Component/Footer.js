import React, { Component } from 'react'

 class Footer extends Component {
    constructor(){
        super();

        this.state={
            name:'Nitin'
        }
        this.state= {
            count:0
        }
    }
    change(){
        this.setState({
            name:'Ramesh'
        })
    }

    increment(){
            this.setState({
                count:this.state.count+1
            })
        }

        decrement(){
            this.setState({
                count:this.state.count-1
            })
        }
    
  render() {
    return (
      <div>
        <h3>hi,{this.state.name}</h3>
        <p>Hello {this.state.name}......
        {this.state.name}You are greate</p>
        <button style={{cursor:'pointer'}} onClick={()=>this.change()}>changeName</button>
        <h3>Count:{this.state.count}</h3>
        <button onClick={()=>this.increment()}>+</button>
        <button onClick={()=>this.decrement()}>-</button>

      </div>
    )
  }
}
export default Footer;