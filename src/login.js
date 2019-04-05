import React, { Component } from 'react';
import logo from '../src/images/logo-small.png';
import './App.css';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Validate from "react-validate-form";

class NameForm extends Component {
  componentDidMount(){
    document.title = "Logic Login page"
  }

state={
  name:'',
  pass:''
}

onSubmit = (e) =>  {
  e.preventDefault();
  if(this.state.name === "" || this.state.pass === "" ){
    console.log(null);
    
  }  else{
    console.log(this.state);
    this.setState({
      name:'',
      pass:''
    })
  }
 
}

onChange = (e) => this.setState({[e.target.name]:e.target.value});

render() {
  const User = 'User Name';

  const Password = 'Password';
  let Submit = "Submit";
  let primary ="primary";

  const { name, pass }= this.state;

  const AllReg = '[a-zA-Z0-9_]+.*$';
  
  return (
    <div className="App" >
      <header id="container" className="App-header container">
      <div  style={{textAlign:"center"}}>

        <img  className="mt-5 " src={logo} alt="Logo"></img>
      </div>
      

      <form onSubmit={this.onSubmit}>
            <div className="form-group offset-lg-3 col-xs-6 col-lg-6">
              <label >{User}</label>
              <input type="text" 
                className="form-control"
                autoComplete="NO" 
                placeholder={User} 
                name='name'
                value={name}
                onChange={this.onChange}
                pattern={AllReg}
              />
            </div>
            <div className="form-group offset-lg-3 col-xs-6 col-lg-6">
              <label >{Password}</label>
              <input type="password" 
                className="form-control" 
                autoComplete="Off"
                placeholder="Password"
                name="pass"
                value={pass}
                onChange={this.onChange}
                pattern={AllReg}
                />
            </div>
            <div  style={{textAlign:"center"}}>
            <Button type="submit" className="col-lg-2 mt-5" id="primary" variant="contained" color={primary} > {Submit} </Button>
            </div>
      </form>
      
        
      </header>
    </div>
  );
}
  }

export default NameForm;
  