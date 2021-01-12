import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Index from './pages/index';
import Packages from './pages/packages';
import Help from './pages/help';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Forgot from './pages/forgot';
import NotFound from './pages/notFound';
import './Sass/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>

          <Navbar/>
          
          <Switch>
            <Route exact path = "/" component = {Index}/>  
            <Route exact path = '/packages' component = {Packages}/>
            <Route exact path = '/help' component = {Help}/>
            <Route exact path = '/contact' component = {Contact}/>
            <Route exact path = '/login' component = {Login}/>
            <Route exact path = '/register' component = {Register}/>
            <Route exact path = '/forgot' component = {Forgot}/>
            <Route exact component = {NotFound}/>
          </Switch>


          <Footer/>

        </Router>
    </div>
  );
}

export default App;
