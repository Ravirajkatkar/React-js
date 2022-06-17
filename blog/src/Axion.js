import React from 'react';
import axios from 'axios';
export default class AddUser extends React.Component {
    state = {
        userName: '',
        userAge: '',
        userAddress: ''
    }
    onNameChange = e => {
        this.setState({
            userName: e.target.value
        });
    };
    onAgeChange = e => {
        this.setState({
            userAge: e.target.value
        });
    };
    onAddressChange = e => {
        this.setState({
            userAddress: e.target.value
        });
    };
    //  handleChange = event => {
    //  this.setState({ userName: event.target.value1 });
    //  this.setState({ userAge: event.target.value2 });
    //  this.setState({ userAddress: event.target.value3 })
    //  }
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            userName: this.state.userName,
            userAge: this.state.userAge,
            userAddress: this.state.userAddress
        };
        axios.post(`http://localhost:3000/posts`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data)
                
            })
    };
    render() {
        return (
            <div>
                <form>
                    <label>
                        User Name:
                        <input type="text" value={this.state.userName} onChange={this.onNameChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Age:
                        <input type="text" value={this.state.userAge} onChange={this.onAgeChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Address:
                        <input type="text" value={this.state.userAddress} onChange={this.onAddressChange} />
                    </label>
                    <br />
                    <br />
                    <button type='Submit'>Add</button>
                </form>
            </div>
        )
    }
}
