import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector, cEthBalanceSelector, cEthInstanceSelector, accountSelector, balanceSelector, supplyValueSelector, underlyingBalanceSelector} from './redux/selectors';
import { supplyEth } from './redux/interactions';
import { convertWeiToEth, convertEthToWei } from './helpers';
import { setSupplyValue, selectPage } from './redux/actions';
import { BackButton } from './BackButton';

class Save extends Component {
    render() {
        const {dispatch, apy, cEthBalance, cEthInstance, account, balance, web3, supplyValue, underlyingBalance} = this.props;

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
                <BackButton dispatch={dispatch} pageName="Account" />
                <Container>
                    <Row>
                        <Col className="text-center">
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
        account: accountSelector(state),
        balance: balanceSelector(state),
        supplyValue: supplyValueSelector(state),
        apy: apySelector(state),
        cEthBalance: cEthBalanceSelector(state),
        underlyingBalance: underlyingBalanceSelector(state),
        cEthInstance: cEthInstanceSelector(state)
	}
}

export default connect(mapStateToProps)(Save);