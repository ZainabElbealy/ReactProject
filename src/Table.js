import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

//{Array.from({ length: 5 }).map((_, index) => (
 //<td key={index}>Table cell {index}</td>
 //))}
export default class MyTable extends Component{
    state={ 
        Products: [
        { id: 0, name: "Chipsy", count: 1},
        { id: 1, name: "Molto", count: 2},
        { id: 2, name: "Chooclate", count: 3},
        { id: 3, name: "Pepsi", count: 5},
      ],
    };

    increment =()=>{
      //console.log('z')
        this.setState({
            count:this.state.Products.count + 1,
        });
    };
    deccrement =()=>{
      //console.log('z')
        this.setState({
            count:this.state.Products.count - 1,
        });
    };



    delete = ()=>{
      
    }
    render(){
        
        return(
            <Table responsive>
      {this.state.Products.map((prod)=>{
        //console.log(prod.id)
        return(
      <tbody >
      <tr key={prod.id}>
          <td className="fs-3 fw-bolder w-25" >{prod.name}</td>
          <td>{prod.count}</td>
        <td><Button variant="danger w-50" onClick={this.delete}>Delete</Button></td>
        <td><Button variant="success w-50" onClick={this.increment}>+</Button></td>
        <td><Button variant="warning w-50 h-50" onClick={this.decrement}>-</Button></td>
          
        </tr>
        
      </tbody>)
      })}
    </Table>
        )
        
    }
}


