import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { loadWeb3 } from './redux/interactions';
import FadeIn from 'react-fade-in';

class Login extends Component {
    
    render() {

        const {dispatch} = this.props;
    
        const login = async (e) => {
          e.preventDefault();
          await loadWeb3(dispatch);
        }

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Button onClick={login}>
                                Connect
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        );
    }
}

function mapStateToProps(state){
	return {
	}
}

export default connect(mapStateToProps)(Login);