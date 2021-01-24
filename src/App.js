import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
function App() {
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

export default App;
