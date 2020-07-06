import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, compoundAPYSelector, balanceSelector, compoundUnderlyingBalanceSelector, accountSelector, aaveAPYSelector, aaveUserLiquiditySelector} from './redux/selectors';
import { convertWeiToEth } from './helpers';
import { selectPage } from './redux/actions/display';
import { BackButton } from './BackButton';
import { topupWallet } from './redux/interactions/ramp';



class Save extends Component {
    render() {
        const {dispatch, compoundAPY, balance, web3, compoundUnderlyingBalance, account, aaveAPY, aaveUnderlyingBalance} = this.props;

        const ethCompoundUnderlyingBalance = convertWeiToEth(web3, compoundUnderlyingBalance);
        const ethAaveUnderlyingBalance = convertWeiToEth(web3, aaveUnderlyingBalance);

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
                                        <th colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Compound</td>
                                        <td>{parseFloat(compoundAPY).toFixed(2)}%</td>
                                        <td><strong>{parseFloat(ethCompoundUnderlyingBalance).toFixed(2)} ETH</strong></td>
                                        <td>{actionButton(() => deposit("compound"), "Deposit")}</td>
                                        <td>{actionButton(() => withdraw("compound"), "Withdraw")}</td>
                                    </tr>
                                    <tr>
                                        <td>AAVE</td>
                                        <td>{parseFloat(aaveAPY).toFixed(2)}%</td>
                                        <td><strong>{parseFloat(ethAaveUnderlyingBalance).toFixed(2)} ETH</strong></td>
                                        <td>{actionButton(() => deposit("aave"), "Deposit")}</td>
                                        <td>{actionButton(() => withdraw("aave"), "Withdraw")}</td>
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
        compoundAPY: compoundAPYSelector(state),
        compoundUnderlyingBalance: compoundUnderlyingBalanceSelector(state),
        aaveAPY: aaveAPYSelector(state),
        aaveUnderlyingBalance: aaveUserLiquiditySelector(state)
	}
}

export default connect(mapStateToProps)(Save);