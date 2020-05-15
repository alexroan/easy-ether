import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, Col, Row, Button} from 'react-bootstrap';
import { currencySymbolSelector, topupAmountSelector, rampSelector } from './redux/selectors';
import { topupAmountChanged, topupWallet } from './redux/interactions';

class TopupTab extends Component {
    render() {

        const {dispatch, currencySymbol, ramp, topupAmount} = this.props;

        const purchase = (e) => {
            e.preventDefault();
            topupWallet(dispatch, ramp, topupAmount);
        }

        const topupAmountChange = (e) => topupAmountChanged(dispatch, e.target.value);

        return (
            <>
                <h4>Top up with a card or bank account!</h4>
                <Form onSubmit={purchase}>
                    <FormGroup as={Row}>
                        <Form.Label column sm="3">Amount: {currencySymbol}</Form.Label>
                        <Col sm="9">
                            <Form.Control required onChange={topupAmountChange} type="number" step="0.01" placeholder="Enter Amount" />
                        </Col>
                    </FormGroup>

                    <Button variant="primary" type="submit">
                        Top up
                    </Button>
                </Form>
            </>
        )
    }
}

function mapStateToProps(state){
	return {
        currencySymbol: currencySymbolSelector(state),
        topupAmount: topupAmountSelector(state),
        ramp: rampSelector(state)
	}
}

export default connect(mapStateToProps)(TopupTab);