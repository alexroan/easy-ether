import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { web3Selector, apySelector, cEthBalanceSelector, cEthInstanceSelector, accountSelector, balanceSelector, supplyValueSelector} from './redux/selectors';
import { supplyEth } from './redux/interactions';
import { convertWeiToEth, convertEthToWei } from './helpers';
import { setSupplyValue } from './redux/actions';

class Save extends Component {
    render() {
        const {dispatch, apy, cEthBalance, cEthInstance, account, balance, web3, supplyValue} = this.props;
        const ethBalance = convertWeiToEth(web3, balance);
        const weiSupplyValue = convertEthToWei(web3, supplyValue);

        const save = () => {
            supplyEth(dispatch, cEthInstance, account, weiSupplyValue);
        }

        const changeSaveValue = (e) => dispatch(setSupplyValue(e.target.value));

        const withdraw = () => {
            //TODO
            console.log("Withdraw");
        }

        let withdrawBtn = <Button onClick={withdraw}>Withdraw</Button>;

        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">ETH</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl onChange={changeSaveValue} type="number" min="0" max={ethBalance} step="0.00001" aria-describedby="basic-addon1" />
                            </InputGroup>
                            <Button onClick={save}>
                                Earn {parseFloat(apy).toFixed(2)}% APY
                            </Button>
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
        cEthInstance: cEthInstanceSelector(state)
	}
}

export default connect(mapStateToProps)(Save);