import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import { web3Selector, balanceSelector } from './redux/selectors';
import { loadAccount, loadBalance, loadCoinGecko } from './redux/interactions';
import Account from './Account';
import Login from './Login';



class App extends Component {

	render() {

		const {dispatch, loadedBalance, web3} = this.props;

		if(web3 !== null) {
			loadAccount(dispatch, web3).then( async (account) =>{
			await loadBalance(dispatch, web3, account);
			await loadCoinGecko(dispatch);
		});
		}    

		return (
		<div className="App">
			<header className="App-header">
				<Account />
				{/* { loadedBalance != null ? <Account /> : <Login /> } */}
			</header>
		</div>
		);
	}
}

function mapStateToProps(state){
	return {
    loadedBalance: balanceSelector(state),
    web3: web3Selector(state),
	}
}

export default connect(mapStateToProps)(App);
