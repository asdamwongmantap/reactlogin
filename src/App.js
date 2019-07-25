// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {Component} from 'react';
// import Aux from './components/hoc/Auxiliary';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Content from './pages/Content';
// import Layout from './components/UI/Layout';
// import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import AddPerson from './components/API/AddPerson';
import GetPeople from './components/API/GetPeople';
import DeletePerson from './components/API/DeletePerson';
import UpdatePerson from './components/API/UpdatePerson';


class App extends Component {
    render() {
        return (
            
            <Router>
                 <Route path="/" exact component={Login}/>
                <Switch>
                    <Route path="/content" component={Content}/>
                    <Route path="/add-person/" component={AddPerson}/>
                    <Route path="/get-people/" component={GetPeople}/>
                    <Route path="/delete-person/" component={DeletePerson}/>
                    <Route path="/update-person/" component={UpdatePerson}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </Router>
           
            
        );
    }
}

export default App;
