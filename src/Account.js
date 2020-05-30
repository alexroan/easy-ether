import React, {Component} from 'react';
import {connect} from 'react-redux';
import { pageSelector } from './redux/selectors';
import AccountOptions from './AccountOptions';
import Save from './Save';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

class Account extends Component {

    render() {
        const {page} = this.props;

        switch (page) {
            case "Account":
                return <AccountOptions />;
            case "Save":
                return <Save />;
            case "Deposit":
                return <Deposit />;
            case "Withdraw":
                return <Withdraw />;
            default:
                return <>ERROR</>;
        }

    }

}

function mapStateToProps(state){
	return {
        page: pageSelector(state)
	}
}

export default connect(mapStateToProps)(Account);