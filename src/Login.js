import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner, Container, Row, Col, Button} from 'react-bootstrap';
import { loggingInSelector } from './redux/selectors';
import { loadWeb3 } from './redux/interactions';

class Login extends Component {
    
    render() {

        const {dispatch, loggingIn} = this.props;
    
        const login = async (e) => {
          e.preventDefault();
          await loadWeb3(dispatch);
        }

        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <Button onClick={login}>
                            { loggingIn ? <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> : <>Connect</> }
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state){
	return {
        loggingIn: loggingInSelector(state),
	}
}

export default connect(mapStateToProps)(Login);