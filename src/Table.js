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
        this.setState({
            count:this.state.Products.count + 1,
        })
    }
    render(){
        
        return(
            <Table responsive>
      
      <tbody >
      <tr>
          <td className="fs-3 fw-bolder w-25" >Chipsy</td>
          <td >0</td>
        <td><Button variant="danger w-50" >Delete</Button></td>
        <td><Button variant="success w-50" onClick={this.increment}>+</Button></td>
        <td><Button variant="warning w-50 h-50">-</Button></td>
          
        </tr>
        <tr>
          <td className="fs-3 fw-bolder w-25">Molto</td>
          <td>0</td>
        <td><Button variant="danger w-50">Delete</Button></td>
        <td><Button variant="success w-50">+</Button></td>
        <td><Button variant="warning w-50 h-50">-</Button></td>
          
        </tr>
        <tr>
          <td className="fs-3 fw-bolder">Chooclate</td>
          <td>0</td>
        <td><Button variant="danger w-50">Delete</Button></td>
        <td><Button variant="success w-50">+</Button></td>
        <td><Button variant="warning w-50 h-50">-</Button></td>
        </tr>
        <tr>
          <td className="fs-3 fw-bolder">Pepsi</td>
          <td>0</td>
        <td><Button variant="danger w-50">Delete</Button></td>
        <td><Button variant="success w-50">+</Button></td>
        <td><Button variant="warning w-50 h-50">-</Button></td>
        </tr>
      </tbody>
    </Table>
        )
        
    }
 }
//{this.state.Products.map((prod)=>{
//   //console.log(prod.id)
//   return()
// })}