import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Login from './components/login/login'
import Home from './components/mainPage/home'
import SignUp from './components/SignUp/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
const MovieData = [
  {
      key:1,
      url:"https://www.themoviedb.org/t/p/original/i72kauIUtPSzAQo7LGm82YNZT6u.jpg",
      movieName:"使女的故事"
  },
  {
      key:2,
      url:"https://www.themoviedb.org/t/p/original/plFfxTit2JIuE72QhRjCu5sICaD.jpg",
      movieName:"The Unholy"
  },
  {
      key:3,
      url:"https://www.themoviedb.org/t/p/original/aUHJKhnD69amVMDr1vzUHcvSCMB.jpg",
      movieName:"查克史奈德之正義聯盟"
  },    
  {
      key:4,
      url:"https://www.themoviedb.org/t/p/original/qAQdKiw7P4UA1CypqMZ2vPmXZN5.jpg",
      movieName:"American Traitor: The Trial of Axis Sally"
  },    
  {
      key:5,
      url:"https://www.themoviedb.org/t/p/original/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg",
      movieName:"The Banishing"
  },
  {
    key:6,
    url:"https://www.themoviedb.org/t/p/original/4CiD9NJQTe9dPTsFb0XfzU6OozY.jpg",
    movieName:"時尚惡女：庫伊拉"
}
]


const SilderData = [
  {
      key:1,
      url:"https://www.themoviedb.org/t/p/original/ovwN1JDPvllWZaH3xtKp7txRWDj.jpg",
      movieName:"The Scientist",
  },
  {
      key:2,
      url:"https://www.themoviedb.org/t/p/original/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
      movieName:"Ava",
  },
  {
      key:3,
      url:"https://www.themoviedb.org/t/p/original/slQmxfWpRjf9o4AsJsOMEON3I1D.jpg",
      movieName:"Censor",
  },    
  {
      key:4,
      url:"https://www.themoviedb.org/t/p/original/eShw0LB5CkoEfYtpUcXPD85oz5Q.jpg",
      movieName:"Freaky"
  },    
  {
      key:5,
      url:"https://www.themoviedb.org/t/p/original/vviYFL6bT0p2AkXI1WIKC2y0rRl.jpg",
      movieName:"In the Earth"
  },
  {
    key:6,
    url:"https://www.themoviedb.org/t/p/original/pKULlYXToGBZ8PjNsnLtEchUSFX.jpg",
    movieName:"Princess Mononoke"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
      {/* <div>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/test">Test</Link></li>
        </ol>
      </div> */}
      <Switch>
        <Route exact path='/'><Home movieData = {MovieData} postsData = {MovieData}/></Route>
        <Route path="/signup"><SignUp/> </Route>
        <Route path="/login" ><Login/></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
