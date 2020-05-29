import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector } from './redux/selectors';

class Save extends Component {
    render() {
        const {dispatch, apy} = this.props;


        const save = () => {
            console.log("Save");
        }

        const withdraw = () => {
            console.log("Withdraw");
        }

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p>
                                Current Interest Rate: <span className="badge badge-pill text-white">{parseFloat(apy).toFixed(2)} % APY</span>
                            </p>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button onClick={save}>
                                Start Earning
                            </Button>
                            <Button onClick={withdraw}>
                                Withdraw Savings
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        )
    }
}

function mapStateToProps(state){
	return {
        web3: web3Selector(state),
        apy: apySelector(state)
	}
}

export default connect(mapStateToProps)(Save);