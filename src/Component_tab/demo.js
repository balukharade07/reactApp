import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';

export default class demo extends Component {
  constructor(props){
    super(props);
    this.state={
   
    }
  }
 

  render() {

      const { Username , place ,Uservalue } = this.props;

    return (
        <div>
           
                        <input 
                            type="text"
                            autoComplete="OFF"
                            className="form-control" 
                            placeholder={place}
                            onChange={this.onChange}
                            name={Username}
                            value={Uservalue}
                            required
                         />
                   
        </div>
    )
  }
}
