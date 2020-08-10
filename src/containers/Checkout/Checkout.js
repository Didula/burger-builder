import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    componentDidCatch(error, errorInfo) {
        console.log(error)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.props);
        return true;
    }

    checkoutCanceledHandler = () => {
        console.log(this.props);
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    onCheckoutCancelled={this.checkoutCanceledHandler}
                    onCheckoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.props.ings}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);