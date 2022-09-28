import React, { Component, Fragment } from "react";
import Nav from "./Nav";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTable from "./Table";




class App extends Component{
  render(){
    return (
      <Fragment>
        <Nav/>
      <h1 className='text-success text-center'>Shopping Cart</h1>
      <Button variant="secondary">Reset</Button>
      <hr/>
      <MyTable/>
      </Fragment>
    );
  }
}



export default App;