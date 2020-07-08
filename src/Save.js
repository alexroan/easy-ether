import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, compoundAPYSelector, balanceSelector, compoundUnderlyingBalanceSelector, accountSelector, aaveAPYSelector, aaveUserLiquiditySelector} from './redux/selectors';
import { convertWeiToEth } from './helpers';
import { selectPage } from './redux/actions/display';
import { BackButton } from './BackButton';
import { topupWallet } from './redux/interactions/ramp';

//TODO: 
//    - Use logos of AAVE and Compound
//    - Total balance across all pools
//    - Value earned from interest in each pool (Easy in AAVE but hard in Compound)
//    - Colour schemes on Deposit & Withdraw pages matching those of pools (purple for AAVE, green for Compound)
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

        const actionButton = (clickAction, text, disabled=false) => {
            return (<Button disabled={disabled} size="sm" onClick={clickAction}>
                {text}
            </Button>);
        }

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <BackButton dispatch={dispatch} pageName="Account" />
                            {(balance.toString() === "0") ? <p>You have no ETH in your wallet. Why not <Button size="sm" onClick={topup}>Topup</Button> ?</p> : <></>}
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
                                        <td>{actionButton(() => deposit("compound"), "Deposit", (balance.toString() === "0"))}</td>
                                        <td>{actionButton(() => withdraw("compound"), "Withdraw", (compoundUnderlyingBalance.toString() === "0"))}</td>
                                    </tr>
                                    <tr>
                                        <td>AAVE</td>
                                        <td>{parseFloat(aaveAPY).toFixed(2)}%</td>
                                        <td><strong>{parseFloat(ethAaveUnderlyingBalance).toFixed(2)} ETH</strong></td>
                                        <td>{actionButton(() => deposit("aave"), "Deposit", (balance.toString() === "0"))}</td>
                                        <td>{actionButton(() => withdraw("aave"), "Withdraw", (aaveUnderlyingBalance.toString() === "0"))}</td>
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