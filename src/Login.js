import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner, Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import { loggingInSelector, currencySelector } from './redux/selectors';
import { loadWeb3 } from './redux/interactions';

class Login extends Component {
    
    render() {

        const {dispatch, loggingIn} = this.props;
    
        const login = async (e) => {
          e.preventDefault();
          await loadWeb3(dispatch);
        }

        return (
            <Jumbotron>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>The easiest way to invest in crypto</h1>
                            <Button onClick={login}>
                                { loggingIn ? <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> : <>Login</> }
                            </Button>
                        </Col>
                    </Row>
                </Container>                
            </Jumbotron>

        );
    }
}

function mapStateToProps(state){
	return {
        loggingIn: loggingInSelector(state),
	}
}

export default connect(mapStateToProps)(Login);