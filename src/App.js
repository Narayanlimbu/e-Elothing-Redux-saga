import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';

const Detail=({match})=>{
  console.log(match.params)
  return <div>
    <h1>This is Detail Page</h1>
  </div>
}

function App() {
  return (
    <div >
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/shop' component={ShopPage}/>
       <Route exact path='/shop/:detailID' component={Detail}/>
     </Switch>
    </div>
  );
}

export default App;
