import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, Alert} from 'react-bootstrap';
import { loadWeb3 } from './redux/interactions/account';
import FadeIn from 'react-fade-in';
import { loggingInErrorSelector, loggingInSelector, loggedInSelector } from './redux/selectors';
import { selectPage } from './redux/actions/display';

class Login extends Component {
    
    render() {

        const {dispatch, loggingIn, loggingInError, loggedIn} = this.props;
    
        const login = async (e) => {
            e.preventDefault();
            await loadWeb3(dispatch);
        }

        if (loggedIn === true) {
            dispatch(selectPage("Account"));
        }

        return (

            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Button onClick={login}>
                                Connect
                            </Button>
                            {loggingInError !== false && loggingIn === false ? <FadeIn><Alert className="my-2" variant="danger">Connect to wallet failure: {loggingInError.message}</Alert></FadeIn> : <></>}
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        );
    }
}

function mapStateToProps(state){
	return {
        loggingInError: loggingInErrorSelector(state),
        loggingIn: loggingInSelector(state),
        loggedIn: loggedInSelector(state)
	}
}

export default connect(mapStateToProps)(Login);