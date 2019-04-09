import React, { Component } from 'react';
import Demo from './demo'; 
import Button from '@material-ui/core/Button';

export default class Messages extends Component {

  constructor(props){
    super(props);
    this.state={
     address:""
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
}

onSubmitContact = (e) =>{
  e.preventDefault();
    console.log(this.state);
}

  render() {
    return (
      <div>
        <h2>Messages is work</h2>
        <form onSubmit={this.onSubmitContact}>
                    <div className="form-group">
                        <label>Messages</label>
                        <Demo  name="address" place="Messages"/>
                    </div>
                    <div className="text-center">
                            <Button type="submit" className="col-lg-4 mt-5" id="primary" variant="contained" color='primary'> Submit </Button>
                    </div>
                </form>
      </div>
    )
  }
}
