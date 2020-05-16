import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { accountSelector, topupOpenSelector, topupErrorSelector, topupSuccessSelector, topupResponseSelector } from './redux/selectors';
import { topupWallet } from './redux/interactions';


class Account extends Component {

    render() {
        const {dispatch, account, topupOpen, topupError, topupSuccess, topupResponse} = this.props;

        const topup = () => {
            topupWallet(dispatch, account);
        }

        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>
                            <span id="account-address" className="text-truncate badge badge-pill badge-success">{account}</span>
                        </p>
                        <Button onClick={topup}>
                            Topup
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }

}

function mapStateToProps(state){
	return {
        account: accountSelector(state),
        topupOpen: topupOpenSelector(state),
        topupError: topupErrorSelector(state),
        topupSuccess: topupSuccessSelector(state),
        topupResponse: topupResponseSelector(state)
	}
}

export default connect(mapStateToProps)(Account);