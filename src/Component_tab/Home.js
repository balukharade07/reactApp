import React, { Component } from 'react';
import Demo from './demo'; 
import Button from '@material-ui/core/Button';

export default class Home extends Component {

  constructor (props){
    super(props);
        this.state= {
          Username:'',
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
        <h2>Homw is work</h2>

        <form onSubmit={this.onSubmitContact}>
                    <div className="form-group">
                        <label>Name</label>
                        <Demo  name="Uservalue" place='User Name'/>
                    </div>
                    <div className="text-center">
                            <Button type="submit" className="col-lg-4 mt-5" id="primary" variant="contained" color='primary'> Submit </Button>
                    </div>
                </form>
       
      </div>
    )
  }
}
