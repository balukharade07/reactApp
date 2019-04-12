import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

export default class addContact extends Component {

    constructor (props){
        super(props);
            this.state= {
                Username:'',
                Userage:'',
                Useraddress:'',
            }
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmitContact = (e) =>{
        e.preventDefault();

        if (this.state.Username === "" || this.state.Userage === "" || this.state.Useraddress === "")
        {
            console.log(null);
            // console.error('All Filds in reqired');
        } else
        {
            console.log(this.state);
            //clear Forms
            this.setState({
                Username:'',
                Userage:'',
                Useraddress:''
            });
          }
    }

  render() {
    const { Username, Userage, Useraddress } = this.state;
    const { text, Name, Age, Address } = this.props;
    const OnlyAlphabetsReg = '^[a-zA-Z][a-zA-Z ]+$';
    const OnlyNumCharReg = '^[0-9][0-9 ]*$';
    const AllReg = '[a-zA-Z0-9_]+.*$';
    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-7">
            <h2 className="text-center">{text === 'Add Contacts' ? (
                <div className="alert alert-success" role="alert">
                    Add Contacts
                </div>
                ) : text === 'Add Product' ? (<div className="alert alert-danger" role="alert">
                    Add Product
                </div>) : text === 'Add List' ?  (<div className="alert alert-primary" role="alert">
                    Add List
                </div>) : null }</h2>
                <form onSubmit={this.onSubmitContact} autoComplete="OFF" >
                    <div className="form-group">
                        <label>{Name}</label>
                        <input
                            type="text"
                            autoComplete="NO"
                            className="form-control"
                            placeholder={Name}
                            name='Username'
                            onChange={this.onChange}
                            value={Username}
                            pattern={OnlyAlphabetsReg}
                            required
                         />
                    </div>
                    <div className="form-group">
                        <label>{Age}</label>
                        <input
                            type="text"
                            autoComplete="NO1"
                            className="form-control"
                            placeholder={Age}
                            name='Userage'
                            onChange={this.onChange}
                            value={Userage}
                            pattern={OnlyNumCharReg}
                            required
                         />
                    </div>
                    <div className="form-group">
                        <label>{Address}</label>
                        <input
                            type="text"
                            autoComplete="OFF"
                            className="form-control"
                            placeholder={Address}
                            name='Useraddress'
                            onChange={this.onChange}
                            value={Useraddress}
                            pattern={AllReg}
                            required
                         />
                    </div>
                    <div className="text-center">
                            <Button type="submit" className="col-lg-4 mt-5" id="primary" variant="contained" color='primary'> Submit </Button>
                    </div>
                </form>
                </div>
        </div>
    </div>
    )
  }
}
