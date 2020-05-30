import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { BackButton } from './BackButton';
import { underlyingBalanceSelector, web3Selector } from './redux/selectors';
import { convertWeiToEth } from './helpers';

class Withdraw extends Component{
    render() {

        const {dispatch, web3, underlyingBalance} = this.props;

        const ethUnderlyingBalance = convertWeiToEth(web3, underlyingBalance);

        const changeWithdrawValue = (e) => console.log(e);

        const withdraw = () => {
            console.log("Withdrawing");
        }

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <BackButton dispatch={dispatch} pageName="Save" />
                            <p>Savings Balance: {parseFloat(ethUnderlyingBalance).toFixed(5)} ETH</p>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">ETH</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl onChange={changeWithdrawValue} type="number" min="0" max={ethUnderlyingBalance} step="0.00001" aria-describedby="basic-addon1" />
                            </InputGroup>
                            <Button onClick={withdraw}>
                                Withdraw Savings
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
        web3: web3Selector(state),
        underlyingBalance: underlyingBalanceSelector(state)
	}
}

export default connect(mapStateToProps)(Withdraw);