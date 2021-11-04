import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Todos from './components/Todos';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="container">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;