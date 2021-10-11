import React, { useEffect } from 'react';
import {Route,Switch} from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {toast} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/headerContainer/Header'
import Footer from './components/footerContainer/Footer'

import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Error from './pages/Error'
import CartSummary from './pages/CartSummary'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import { selectAuthenticationSignin, selectAuthenticationToken } from './redux/authentication/authentication.selectors';
import ProtectedRoute from './components/ProtectedRoute';
import Signin from './components/Signin';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import { requestProfile } from './redux/authentication/authentication.actions';
import { fetchOrder } from './redux/order/order.actions';
import { selectProductList } from './redux/product/product.selectors';
import { fetchProductsStartAsync } from './redux/product/product.actions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsNConditions from './pages/TermsNConditions';
import { fetchAddress } from './redux/address/address.actions';


toast.configure()

function App(props) {
  const {signin,token,requestProfile,fetchOrder,products,fetchProductsStartAsync,fetchAddress} = props;

  useEffect(()=>{
    token&&requestProfile(token);
    token&&fetchAddress(token);
    //token&&fetchOrder(token);
    !products&&fetchProductsStartAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <React.Fragment>
      <div className="clv_main_wrapper index_v1">
        <Header/>
          <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/contact-us' component = {ContactUs}/>
            <Route exact path = '/about-us' component = {AboutUs}/>
            <ProtectedRoute exact path = '/orders' component = {Orders}/>
            <ProtectedRoute exact path = '/profile' component = {Profile}/>
            <Route exact path = '/cart-summary' component = {CartSummary}/>
            <ProtectedRoute exact path = '/cart-summary/checkout' component = {Checkout}/>
            <Route exact path ='/privacy-policy' component={PrivacyPolicy} />
            <Route exact path ='/terms-n-condition' component={TermsNConditions}/>
            <Route exact path = '/:id' component = {ProductDetails}/>
            <Route component = {Error}/>
          </Switch>
        <Footer/>
      </div>
      {
        signin&&<Signin/>
      }
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector ({
  signin : selectAuthenticationSignin,
  token : selectAuthenticationToken,
  products : selectProductList
})

const mapDispatchToProps = dispatch => ({
  requestProfile : token => dispatch(requestProfile(token)),
  fetchOrder : token => dispatch(fetchOrder(token)),
  fetchProductsStartAsync : () => dispatch(fetchProductsStartAsync()),
  fetchAddress : token => dispatch(fetchAddress(token))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
