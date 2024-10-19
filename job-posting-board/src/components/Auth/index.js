import React, { Component } from 'react';
import Header from '../Header';
import SignUp from '../common/SignUp';
import SignUpNext from '../common/SignIn';
import Login from '../common/Login';

export class AuthPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSigningUp: true,
        };
    }

    toggleAuthMode = () => {
        this.setState((prevState) => ({
            isSigningUp: !prevState.isSigningUp,
        }));
    };

    render() {
        return (
            <div className="flex flex-col items-center min-h-screen bg-white">
                <Header />

                {this.state.isSigningUp ? (
                    <SignUp onSignUpSuccess={this.toggleAuthMode} />  
                ) : (
                <SignUpNext />
                )}

                
            </div>
        );
    }
}

export default AuthPage;
