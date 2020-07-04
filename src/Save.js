import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector, cEthBalanceSelector, balanceSelector, underlyingBalanceSelector, accountSelector} from './redux/selectors';
import { convertWeiToEth } from './helpers';
import { selectPage } from './redux/actions';
import { BackButton } from './BackButton';
import { topupWallet } from './redux/interactions/ramp';

class Save extends Component {
    render() {
        const {dispatch, apy, cEthBalance, balance, web3, underlyingBalance, account} = this.props;

        const ethUnderlyingBalance = convertWeiToEth(web3, underlyingBalance);

        const withdraw = () => {
            dispatch(selectPage("Withdraw"));
        }

        const deposit = () => {
            dispatch(selectPage("Deposit"));
        }

        const topup = () => {
            topupWallet(dispatch, account);
        }

        let depositBtn = <Col className="text-center"><Button onClick={deposit}>Deposit</Button></Col>;
        let withdrawBtn = <Col className="text-center"><Button onClick={withdraw}>Withdraw</Button></Col>;

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <BackButton dispatch={dispatch} pageName="Account" />
                            {balance <= 0 && cEthBalance <= 0 ? <p><Button size="sm" onClick={topup}>Topup</Button> to start saving</p> : <></>}
                            <p>Savings: {parseFloat(ethUnderlyingBalance).toFixed(5)}~ ETH</p>
                            <p>Current Interest: {parseFloat(apy).toFixed(2)}% APY</p>
                        </Col>
                    </Row>
                    <Row>
                        {balance > 0 ? depositBtn : <></>}
                        {cEthBalance > 0 ? withdrawBtn : <></>}
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
        account: accountSelector(state),
        apy: apySelector(state),
        cEthBalance: cEthBalanceSelector(state),
        underlyingBalance: underlyingBalanceSelector(state),
	}
}

export default connect(mapStateToProps)(Save);