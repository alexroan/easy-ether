import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { web3Selector, balanceSelector, currencySelector } from './redux/selectors';
import { loadAccount, loadBalance, loadCoinGecko, getFiatBalance } from './redux/interactions';
import Account from './Account';
import Login from './Login';



class App extends Component {

	render() {

		const {dispatch, loadedBalance, web3, currency} = this.props;

		if(web3 !== null) {
			loadAccount(dispatch, web3).then(async (account) =>{
				loadBalance(dispatch, web3, account).then(async (balance) => {
					loadCoinGecko(dispatch).then(async (coinGecko) => {
						await getFiatBalance(dispatch, web3, coinGecko, 'ethereum', currency, balance);
					});
				});
			});
		}    

		return (
		<div className="App">
			<header className="App-header">
				{/* <Account /> */}
				{ loadedBalance != null ? <Account /> : <Login /> }
			</header>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
		loadedBalance: balanceSelector(state),
		web3: web3Selector(state),
		currency: currencySelector(state),
	}
}

export default connect(mapStateToProps)(App);
