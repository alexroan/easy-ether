import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, Col, Row, Button} from 'react-bootstrap';
import { currencySymbolSelector } from './redux/selectors';

class TopupTab extends Component {
    render() {

        const {currencySymbol} = this.props;

        const purchase = () => {
            console.log("Purchasing");
        }

        return (
            <Form onSubmit={purchase}>
                <FormGroup as={Row}>
                    <Form.Label column sm="3">Amount: {currencySymbol}</Form.Label>
                    <Col sm="9">
                        <Form.Control type="number" placeholder="Enter Amount" />
                    </Col>
                </FormGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

function mapStateToProps(state){
	return {
        currencySymbol: currencySymbolSelector(state)
	}
}

export default connect(mapStateToProps)(TopupTab);