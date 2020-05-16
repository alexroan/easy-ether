import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';
import { balanceSelector } from './redux/selectors';
import Account from './Account';
import Login from './Login';

class App extends Component {

	render() {

		const {loadedBalance} = this.props;

		return (
		<div className="app h-100">
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
