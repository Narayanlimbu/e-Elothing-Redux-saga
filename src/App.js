import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';
import {connect} from 'react-redux';

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state={
  //     currentUser:null
  //   }
  // }

  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snamShot=>{
          setCurrentUser
          ({
              id:snamShot.id,
              ...snamShot.data()
          })
        })
      }
     setCurrentUser({userAuth}) // null
   })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
      <div >
        <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUp}/>
      </Switch>
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
