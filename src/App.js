import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';
import { balanceSelector } from './redux/selectors';
import Account from './Account';
import Login from './Login';
import { Container, Row, Col } from 'react-bootstrap';
import {SocialIcon} from 'react-social-icons';

class App extends Component {

	render() {

		const {loadedBalance} = this.props;

		return (
		<div className="app h-100">
			{ loadedBalance != null ? <Account /> : <Login /> }
			<footer>
				<Container>
					<Row>
						<Col className="text-center pt-4 pb-2">
							<span><a href="https://alexroan.co.uk">Alex Roan</a></span>
						</Col>
					</Row>
					<Row>
						<Col className="text-center pb-4">
							<SocialIcon className="mx-1" url="https://twitter.com/alexroan" />
							<SocialIcon className="mx-1" url="https://github.com/alexroan" />
							<SocialIcon className="mx-1" url="https://medium.com/@alexroan" />
							<SocialIcon className="mx-1" network="email" url="mailto:alex.roan@hotmail.com" />
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		loadedBalance: balanceSelector(state),
	}
}

export default connect(mapStateToProps)(App);
