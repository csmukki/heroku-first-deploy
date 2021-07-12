import React from 'react';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';


class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "", 
        }
    }

    handleChange = event => {
        const {name, value}= event.target;
        this.setState({[name]: value});
    };
    
    handleSubmit = event => {
        event.preventDefault();
        const {username, password} = this.state;
        this.props.setCurrentUser({username, password})
        this.setState({username: "", password: ""});
    };

    render() {
        const {username, password} = this.state;
        return(
            <div className="homepage">
                <h2>Enter user details here...</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <input type="password" 
                        name="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={this.handleChange}
                    />
                    <br /><br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
};



const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Homepage);