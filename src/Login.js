import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner} from 'react-bootstrap';
import { loggingInSelector } from './redux/selectors';
import { initializeTorus, login } from './redux/interactions';

class Login extends Component {
    
    render() {

        const {dispatch, loggingIn} = this.props;
    
        const loginTorus = async (e) => {
          e.preventDefault();
          const torus = await initializeTorus(dispatch);
          await login(dispatch, torus);
        }

        return (
            <form onSubmit={loginTorus}>
                <button type="submit" className="w-100 btn btn-primary">
                    { loggingIn ? <><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />Logging in...</> : <>Login</> }
                </button>
            </form>
        );
    }
}

function mapStateToProps(state){
	return {
        loggingIn: loggingInSelector(state),
	}
}

export default connect(mapStateToProps)(Login);