import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Form, Col, Row } from 'react-bootstrap';
import { accountSelector, balanceSelector, web3Selector } from './redux/selectors';
import { convertWeiToEth } from './helpers';

class SummaryTab extends Component {
    render() {
        const {account, web3, balance} = this.props;
        const etherBalance = convertWeiToEth(web3, balance)
        return (
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Ether Amount:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={etherBalance} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        Ethereum Address:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue={account} />
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}

function mapStateToProps(state){
	return {
        account: accountSelector(state),
        web3: web3Selector(state),
        balance: balanceSelector(state)
	}
}

export default connect(mapStateToProps)(SummaryTab);