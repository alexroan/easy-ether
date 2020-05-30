import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector, cEthBalanceSelector, balanceSelector, underlyingBalanceSelector} from './redux/selectors';
import { convertWeiToEth } from './helpers';
import { selectPage } from './redux/actions';
import { BackButton } from './BackButton';

class Save extends Component {
    render() {
        const {dispatch, apy, cEthBalance, balance, web3, underlyingBalance} = this.props;

        const ethUnderlyingBalance = convertWeiToEth(web3, underlyingBalance);

        const withdraw = () => {
            //TODO
            console.log("Withdraw");
        }

        const deposit = () => {
            dispatch(selectPage("Deposit"));
        }

        let depositBtn = <Button onClick={deposit}>Deposit</Button>;
        let withdrawBtn = <Button onClick={withdraw}>Withdraw</Button>;

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <BackButton dispatch={dispatch} pageName="Account" />
                            <p>In Savings: {parseFloat(ethUnderlyingBalance).toFixed(5)} ETH</p>
                            <p>Current Interest Rate: {parseFloat(apy).toFixed(2)}% APY</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            {balance > 0 ? depositBtn : <></>}
                        </Col>
                        <Col className="text-center">
                            {cEthBalance > 0 ? withdrawBtn : <></>}
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
        balance: balanceSelector(state),
        apy: apySelector(state),
        cEthBalance: cEthBalanceSelector(state),
        underlyingBalance: underlyingBalanceSelector(state),
	}
}

export default connect(mapStateToProps)(Save);