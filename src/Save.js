import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector, cEthBalanceSelector, balanceSelector, underlyingBalanceSelector, accountSelector} from './redux/selectors';
import { convertWeiToEth } from './helpers';
import { selectPage } from './redux/actions/display';
import { BackButton } from './BackButton';
import { topupWallet } from './redux/interactions/ramp';



class Save extends Component {
    render() {
        const {dispatch, apy, cEthBalance, balance, web3, underlyingBalance, account} = this.props;

        const ethUnderlyingBalance = convertWeiToEth(web3, underlyingBalance);

        const withdraw = (protocol) => {
            dispatch(selectPage("Withdraw", protocol));
        }

        const deposit = (protocol) => {
            dispatch(selectPage("Deposit", protocol));
        }

        const topup = () => {
            topupWallet(dispatch, account);
        }

        const actionButton = (clickAction, text) => {
            return (<Button size="sm" onClick={clickAction}>
                {text}
            </Button>);
        }

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <BackButton dispatch={dispatch} pageName="Account" />
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Pool</th>
                                        <th>APY</th>
                                        <th>Balance</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Compound</td>
                                        <td>{parseFloat(apy).toFixed(2)}%</td>
                                        <td><strong>{parseFloat(ethUnderlyingBalance).toFixed(2)} ETH</strong></td>
                                        <td>{actionButton(() => deposit("compound"), "Deposit")}</td>
                                        <td>{actionButton(() => withdraw("compound"), "Withdraw")}</td>
                                    </tr>
                                    <tr>
                                        <td>AAVE</td>
                                        <td>0.75%</td>
                                        <td><strong>2.50 ETH</strong></td>
                                        <td><Button size="sm">Deposit</Button></td>
                                        <td><Button size="sm">Withdraw</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
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
        account: accountSelector(state),
        apy: apySelector(state),
        cEthBalance: cEthBalanceSelector(state),
        underlyingBalance: underlyingBalanceSelector(state),
	}
}

export default connect(mapStateToProps)(Save);