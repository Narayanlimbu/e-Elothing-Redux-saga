import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';


class App extends React.Component{
  unsubscribeFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser
          ({
              id:snapShot.id,
              ...snapShot.data()
          })
        })
      }
     setCurrentUser(userAuth) // null
   })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const {currentUser}=this.props;
  return (
      <div >
         <Header/> 
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/> 
        <Route exact path='/signin' render={()=>currentUser ? (<Redirect to='/'/>) :(<SignInSignUp/>) }/>
        <Route exact path='/checkout' component={CheckoutPage}/> 
      </Switch>
      </div>
    );
  }
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
