import React, {Component} from 'react';
import {connect} from 'react-redux';
import { pageSelector } from './redux/selectors';
import AccountOptions from './AccountOptions';
import Save from './Save';


class Account extends Component {

    render() {
        const {page} = this.props;

        if (page === "Account") {
            return <AccountOptions />;
        }
        else if (page === "Save") {
            return <Save />;
        }
        else {
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