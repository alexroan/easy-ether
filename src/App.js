import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { web3Selector, balanceSelector, currencySelector } from './redux/selectors';
import Account from './Account';
import Login from './Login';
import { Container, Navbar } from 'react-bootstrap';



class App extends Component {

	render() {

		const {loadedBalance} = this.props;

		return (
		<div className="App h-100">
			<Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">EasyInvest</Navbar.Brand>
                </Container>
            </Navbar>
			{ loadedBalance != null ? <Account /> : <Login /> }
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
