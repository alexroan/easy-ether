import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, DropdownButton, Dropdown, Row, Col, Nav, ButtonGroup} from 'react-bootstrap';
import { web3Selector, balanceSelector, userInfoSelector, torusSelector, accountSelector, coinGeckoSelector, tabSelector, currencySelector, loadingFiatBalanceSelector, fiatBalanceSelector, currencySymbolSelector } from './redux/selectors';
import { choseTab, choseCurrency } from './redux/interactions';
import SummaryTab from './SummaryTab';
import TopupTab from './TopupTab';



class Account extends Component {

    render() {
        const {dispatch, selectedTab, selectedCurrency, currencySymbol, fiatBalance} = this.props;

        const tabChosen = (tabName) => {
            choseTab(dispatch, tabName);
        }

        const currencyChosen = (key) => {
            const keyArray = key.split(",");
            choseCurrency(dispatch, keyArray[0], keyArray[1]);
        }

        const printSelectedTab = (tabName) => {
            let printout = (<SummaryTab />)
            if(tabName === 'topup' ){
                printout = (<TopupTab />);
            }
            return printout;
        }

        return (
            <Container>
                <Row>
                    <Col sm="3">
                        <Nav defaultActiveKey="summary" onSelect={(key) => tabChosen(key)} className="flex-md-column">
                            <Nav.Link eventKey="summary" >Summary</Nav.Link>
                            <Nav.Link eventKey="topup" >Top Up</Nav.Link>
                            {/* <Button onClick={topUp}>Top Up</Button> */}
                            <Nav.Link eventKey="withdraw" disabled >Withdraw</Nav.Link>
                            <Nav.Link eventKey="send" disabled>Send</Nav.Link>
                            <Nav.Link eventKey="invest" disabled>Invest</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        <div>
                            <Col sm="12">
                                <ButtonGroup>
                                    <h2 className="pr-2">Balance: {currencySymbol}{fiatBalance}</h2>
                                    {' '}
                                    <DropdownButton onSelect={(key) => currencyChosen(key)} id="dropdown-basic-button" title={selectedCurrency}>
                                        <Dropdown.Item eventKey={["gbp", "£"]}>GBP</Dropdown.Item>
                                        <Dropdown.Item eventKey={["eur", "€"]}>EUR</Dropdown.Item>
                                        <Dropdown.Item eventKey={["usd", "$"]}>USD</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </Col>
                            <hr />
                            <Col sm="12">
                                { printSelectedTab(selectedTab) }
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

}

function mapStateToProps(state){
	return {
        selectedTab: tabSelector(state),
        loadedBalance: balanceSelector(state),
        web3: web3Selector(state),
        userInfo: userInfoSelector(state),
        torus: torusSelector(state),
        account: accountSelector(state),
        coinGecko: coinGeckoSelector(state),
        selectedCurrency: currencySelector(state),
        currencySymbol: currencySymbolSelector(state),
        fiatBalanceLoading: loadingFiatBalanceSelector(state),
        fiatBalance: fiatBalanceSelector(state)
	}
}

export default connect(mapStateToProps)(Account);