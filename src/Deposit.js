import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector, cEthInstanceSelector, accountSelector, balanceSelector, supplyValueSelector, networkSelector, depositingSelector, depositConfirmationNumberSelector} from './redux/selectors';
import { convertWeiToEth, convertEthToWei } from './helpers';
import { setSupplyValue } from './redux/actions';
import { BackButton } from './BackButton';
import { FadeInSpinner } from './FadeInSpinner';
import { supplyEth } from './redux/interactions/compound';

class Deposit extends Component {
    render() {
        const {dispatch, apy, cEthInstance, account, balance, web3, supplyValue, network, depositing, confirmationNumber} = this.props;
        const weiSupplyValue = convertEthToWei(web3, supplyValue);
        const ethBalance = convertWeiToEth(web3, balance);

        const changeSaveValue = (e) => dispatch(setSupplyValue(e.target.value));

        const save = () => {
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
	return {
        web3: web3Selector(state),
        account: accountSelector(state),
        balance: balanceSelector(state),
        network: networkSelector(state),
        supplyValue: supplyValueSelector(state),
        apy: apySelector(state),
        cEthInstance: cEthInstanceSelector(state),
        depositing: depositingSelector(state),
        confirmationNumber: depositConfirmationNumberSelector(state)
	}
}

export default connect(mapStateToProps)(Deposit);