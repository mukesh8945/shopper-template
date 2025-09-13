import React from "react";

class SuccessComponent extends React.Component {
    componentDidMount() {
        alert('Success component will render');
    }
    componentWillUnmount() {
        alert('Success component unmount');
    }
    render() {
        return (
            <div className="container-fluid">
                <h2 className="text-success">Login Success...</h2>
            </div>
        )
    }
}

class ErrorComponent extends React.Component {
    componentDidMount() {
        alert('Error component will render');
    }
    componentWillUnmount() {
        alert('Error component unmount');
    }

    render() {
        return (
            <div className="container-fluid">
                <h2 className="text-danger">Invalid Login.....</h2>
            </div>
        )
    }
}

export default class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                UserName: 'john_nit',
                Password: 'john@11'
            },
            formDetails: {
                UserName: '',
                Password: ''
            },
            result: ''
        }
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUserName(event) {
        this.setState({
            formDetails: {
                UserName: event.target.value,
                Password: this.state.formDetails.Password
            }
        })
    }

    handlePassword(event) {
        this.setState({
            formDetails: {
                UserName: this.state.formDetails.UserName,
                Password: event.target.value,
            }
        })

    }

    handleLoginClick() {
        if (this.state.formDetails.UserName === this.state.userDetails.UserName && this.state.formDetails.Password === this.state.userDetails.Password) {
            this.setState({
                result: <SuccessComponent />
            })
        } else {
            this.setState({
                result: <ErrorComponent />
            })
        }
    }

    render() {
        return (
            <div className="containner-fluid">
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={this.handleUserName} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input onChange={this.handlePassword} type="password" /></dd>
                </dl>
                <button onClick={this.handleLoginClick} className="btn btn-success" type="submit">Login</button>
                <div>
                    {this.state.result}
                </div>
            </div>
        )
    }
}