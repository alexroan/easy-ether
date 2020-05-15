import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Col, Row, Button, Alert} from 'react-bootstrap';
import { web3Selector, balanceSelector, accountSelector, ethSendRecipientSelector, ethSendAmountSelector, ethSendHashSelector, ethSendConfirmationSelector, currencySelector } from './redux/selectors';
import { convertWeiToEth } from './helpers';
import { ethRecipientChanged, ethSendAmountChanged, sendEther } from './redux/interactions';

class Send extends Component {
    
    render() {

        const {dispatch, web3, account, recipient, amount, balance, sendHash, sendConfirmation, currentCurrency} = this.props;
        const etherBalance = convertWeiToEth(web3, balance);
        
        let sendAlert = <></>;
        if (sendHash !== "" && sendConfirmation < 10) {
            sendAlert = (
                <Alert variant="primary">
                    Sending... Confirmations: {sendConfirmation}
                </Alert>
            )
        }
        else if (sendHash !== "" && sendConfirmation >= 10) {
            sendAlert = (
                <Alert variant="success">
                    Sent!
                </Alert>
            )
        }

        const send = async (e) => {
            e.preventDefault();
            await sendEther(dispatch, web3, account, recipient, amount, currentCurrency);
        }

        const recipientChange = (e) => ethRecipientChanged(dispatch, e.target.value);
        const sendAmountChange = (e) => ethSendAmountChanged(dispatch, e.target.value);

        return (
            <>
            <Alert variant="primary">
                Sending your ether to another address requires the recipient's public key address.
                If you'd like to withdraw your investment for pound sterling or Euros, please use the
                Withdraw tab instead.
            </Alert>
            <Form onSubmit={send}>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">
                        Ether Balance:
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={etherBalance} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">Recipient Address:</Form.Label>
                    <Col sm="9">
                        <Form.Control required onChange={recipientChange} type="text" placeholder="Recipient Address" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="3">Eth To Send:</Form.Label>
                    <Col sm="9">
                        <Form.Control required onChange={sendAmountChange} type="number" step="0.00001" placeholder="Enter Amount" />
                    </Col>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
            {sendAlert}
            </>
        );
    }
}

function mapStateToProps(state){
	return {
        web3: web3Selector(state),
        balance: balanceSelector(state),
        account: accountSelector(state),
        recipient: ethSendRecipientSelector(state),
        amount: ethSendAmountSelector(state),
        sendHash: ethSendHashSelector(state),
        sendConfirmation: ethSendConfirmationSelector(state),
        currentCurrency: currencySelector(state)
	}
}

export default connect(mapStateToProps)(Send);