import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector, cEthInstanceSelector, accountSelector, balanceSelector, supplyValueSelector} from './redux/selectors';
import { supplyEth } from './redux/interactions';
import { convertWeiToEth, convertEthToWei } from './helpers';
import { setSupplyValue } from './redux/actions';
import { BackButton } from './BackButton';

class Deposit extends Component {
    render() {
        const {dispatch, apy, cEthInstance, account, balance, web3, supplyValue} = this.props;
        const weiSupplyValue = convertEthToWei(web3, supplyValue);
        const ethBalance = convertWeiToEth(web3, balance);

        const changeSaveValue = (e) => dispatch(setSupplyValue(e.target.value));

        const save = () => {
            supplyEth(dispatch, cEthInstance, account, weiSupplyValue);
        }

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
}

function mapStateToProps(state){
	return {
        web3: web3Selector(state),
        account: accountSelector(state),
        balance: balanceSelector(state),
        supplyValue: supplyValueSelector(state),
        apy: apySelector(state),
        cEthInstance: cEthInstanceSelector(state)
	}
}

export default connect(mapStateToProps)(Deposit);