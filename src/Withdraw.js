import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { BackButton } from './BackButton';
import { compoundUnderlyingBalanceSelector, web3Selector, compoundWithdrawingSelector, compoundWithdrawConfirmationNumberSelector, compoundRedeemValueSelector, compoundEthInstanceSelector, accountSelector, networkSelector } from './redux/selectors';
import { convertWeiToEth, convertEthToWei } from './helpers';
import {setRedeemValue} from './redux/actions/compound';
import { FadeInSpinner } from './FadeInSpinner';
import { redeemEth } from './redux/interactions/compound';


//TODO Handle pageParameter
class Withdraw extends Component{
    render() {

        const {dispatch, web3, underlyingBalance, withdrawing, confirmationNumber, redeemValue, cEthInstance, account, network} = this.props;
        const weiRedeemValue = convertEthToWei(web3, redeemValue);
        const ethUnderlyingBalance = convertWeiToEth(web3, underlyingBalance);

        const changeRedeemValue = (e) => dispatch(setRedeemValue(e.target.value));

        const withdraw = () => {
            //TODO handle pageParameter
            redeemEth(dispatch, cEthInstance, account, weiRedeemValue, web3, network);
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
	return {
        web3: web3Selector(state),
        underlyingBalance: compoundUnderlyingBalanceSelector(state),
        withdrawing: compoundWithdrawingSelector(state),
        confirmationNumber: compoundWithdrawConfirmationNumberSelector(state),
        redeemValue: compoundRedeemValueSelector(state),
        cEthInstance: compoundEthInstanceSelector(state),
        account: accountSelector(state),
        network: networkSelector(state),
	}
}

export default connect(mapStateToProps)(Withdraw);