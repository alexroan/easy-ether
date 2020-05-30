import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { accountSelector, topupOpenSelector, topupErrorSelector, topupSuccessSelector, topupResponseSelector } from './redux/selectors';
import { topupWallet } from './redux/interactions';
import FadeIn from 'react-fade-in';
import { selectPage } from './redux/actions';

class AccountOptions extends Component {
    render() {
        const {dispatch, account} = this.props;

        const topup = () => {
            topupWallet(dispatch, account);
        }

        const save = () => {
            dispatch(selectPage("Save"));
        }
        return (
            <FadeIn>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Button onClick={topup}>
                                Topup
                            </Button>
                        </Col>
                        <Col className="text-center">
                            <Button onClick={save}>
                                Savings
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </FadeIn>
        );
    }
}


function mapStateToProps(state){
	return {
        account: accountSelector(state),
        topupOpen: topupOpenSelector(state),
        topupError: topupErrorSelector(state),
        topupSuccess: topupSuccessSelector(state),
        topupResponse: topupResponseSelector(state),
	}
}

export default connect(mapStateToProps)(AccountOptions);