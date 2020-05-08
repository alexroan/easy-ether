import React, {Component} from 'react';
import {connect} from 'react-redux';

class SummaryTab extends Component {
    render() {
        return (
            <div>Summary Tab</div>
        )
    }
}

function mapStateToProps(state){
	return {

	}
}

export default connect(mapStateToProps)(SummaryTab);