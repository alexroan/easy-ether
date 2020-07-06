import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, compoundAPYSelector, compoundEthInstanceSelector, accountSelector, balanceSelector, compoundSupplyValueSelector, networkSelector, compoundDepositingSelector, compoundDepositConfirmationNumberSelector, pageParameterSelector, aaveAPYSelector} from './redux/selectors';
import { convertWeiToEth, convertEthToWei } from './helpers';
import { setSupplyValue } from './redux/actions/compound';
import { BackButton } from './BackButton';
import { FadeInSpinner } from './FadeInSpinner';
import { supplyEth } from './redux/interactions/compound';

class Deposit extends Component {
    render() {
        const {dispatch, apy, cEthInstance, account, balance, web3, supplyValue, network,
            depositing, confirmationNumber, pageParameter} = this.props;
        const weiSupplyValue = convertEthToWei(web3, supplyValue);
        const ethBalance = convertWeiToEth(web3, balance);

        const changeSaveValue = (e) => dispatch(setSupplyValue(e.target.value));

        const save = () => {
            //TODO Handle pageParameter
            supplyEth(dispatch, cEthInstance, account, weiSupplyValue, web3, network);
        }

        const pageContent = () => {
            return (
                <FadeIn>
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <BackButton dispatch={dispatch} pageName="Save" />
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">ETH</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={changeSaveValue} type="number" min="0" max={ethBalance} step="0.001" aria-describedby="basic-addon1" />
                                </InputGroup>
                                <Button onClick={save}>
                                    Earn {parseFloat(apy).toFixed(2)}% APY
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </FadeIn>
            )
        }

        return (depositing ? <FadeInSpinner message={`Depositing ${supplyValue} ETH`} confirmationNumber={confirmationNumber} /> : pageContent());

    }
}

function mapStateToProps(state){
    const pageParameter = pageParameterSelector(state);
    let apy = null;
    switch (pageParameter) {
        case 'compound':
            apy = compoundAPYSelector(state);
            break;
        case 'aave':
            apy = aaveAPYSelector(state);
            break;
        default:
            break;
    }

	return {
        pageParameter: pageParameterSelector(state),
        web3: web3Selector(state),
        account: accountSelector(state),
        balance: balanceSelector(state),
        network: networkSelector(state),
        supplyValue: compoundSupplyValueSelector(state),
        apy: apy,
        cEthInstance: compoundEthInstanceSelector(state),
        depositing: compoundDepositingSelector(state),
        confirmationNumber: compoundDepositConfirmationNumberSelector(state)
	}
}

export default connect(mapStateToProps)(Deposit);