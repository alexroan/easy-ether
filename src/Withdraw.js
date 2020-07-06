import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { BackButton } from './BackButton';
import { compoundUnderlyingBalanceSelector, web3Selector, compoundEthInstanceSelector, accountSelector, networkSelector, withdrawingSelector, withdrawConfirmationNumberSelector, redeemValueSelector, pageParameterSelector, aaveUserLiquiditySelector, aaveEthATokenSelector } from './redux/selectors';
import { convertWeiToEth, convertEthToWei } from './helpers';
import { FadeInSpinner } from './FadeInSpinner';
import { redeemEth } from './redux/interactions/compound';
import { setRedeemValue } from './redux/actions/withdraw';
import { withdrawEth } from './redux/interactions/aave';

class Withdraw extends Component{
    render() {

        const {dispatch, web3, underlyingBalance, withdrawing, confirmationNumber, redeemValue, 
            compoundEthInstance, account, network, pageParameter, aaveEthAToken} = this.props;
        const weiRedeemValue = convertEthToWei(web3, redeemValue);
        const ethUnderlyingBalance = convertWeiToEth(web3, underlyingBalance);

        const changeRedeemValue = (e) => dispatch(setRedeemValue(e.target.value));

        const withdraw = () => {
            switch (pageParameter) {
                case 'compound':
                    redeemEth(dispatch, compoundEthInstance, account, weiRedeemValue, web3, network);
                    break;
                case 'aave':
                    withdrawEth(dispatch, web3, aaveEthAToken, account, weiRedeemValue, network);
                    break;
                default:
                    break;
            }
        }

        const pageContent = () => {
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
                                    <FormControl onChange={changeRedeemValue} type="number" min="0" max={ethUnderlyingBalance} step="0.00001" aria-describedby="basic-addon1" />
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

        return (withdrawing ? <FadeInSpinner message={`Withdrawing ${redeemValue} ETH`} confirmationNumber={confirmationNumber} /> : pageContent());

    }
}

function mapStateToProps(state){
    const pageParameter = pageParameterSelector(state);
    let underlyingBalance = 0;
    switch (pageParameter) {
        case 'compound':
            underlyingBalance = compoundUnderlyingBalanceSelector(state);
            break;
        case 'aave':
            underlyingBalance = aaveUserLiquiditySelector(state);
            break;
        default:
            break;
    }
	return {
        web3: web3Selector(state),
        underlyingBalance: underlyingBalance,
        withdrawing: withdrawingSelector(state),
        confirmationNumber: withdrawConfirmationNumberSelector(state),
        redeemValue: redeemValueSelector(state),
        compoundEthInstance: compoundEthInstanceSelector(state),
        aaveEthAToken: aaveEthATokenSelector(state),
        account: accountSelector(state),
        network: networkSelector(state),
        pageParameter: pageParameter
	}
}

export default connect(mapStateToProps)(Withdraw);