import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner} from 'react-bootstrap';
import './App.css';
import { web3Selector, accountSelector, balanceSelector, loggingInSelector } from './redux/selectors';
import { initializeTorus, login, loadAccount, loadBalance } from './redux/interactions';



class App extends Component {

  componentDidMount() {
    
  }

  render() {

    const {dispatch, loadedBalance, loggingIn, web3} = this.props;

    const loginTorus = async (e) => {
      e.preventDefault();
      const torus = await initializeTorus(dispatch);
      await login(dispatch, torus);
    }

    if(web3 !== null) {
        loadAccount(dispatch, web3).then( async (account) =>{
        await loadBalance(dispatch, web3, account);
      });
    }
    

    return (
      <div className="App">
        <header className="App-header">
          { loadedBalance != null ? <p>Account Loaded<br />Balance: {web3.utils.fromWei(loadedBalance, 'ether')} ETH</p> 
            : 
          <form onSubmit={loginTorus}>
            <button type="submit" className="w-100 btn btn-primary">
              { loggingIn ? <><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />Logging in...</> : <>Login</> }
            </button>
          </form>
          }
        </header>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
    loadedAccount: accountSelector(state),
    loadedBalance: balanceSelector(state),
    loggingIn: loggingInSelector(state),
    web3: web3Selector(state)
	}
}

export default connect(mapStateToProps)(App);
