import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Top from "./pages/Top";
import Search from "./pages/Search";
import { data } from "./Mocks/SearchResponse";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "../src/storage/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/TopAnimes">
            <Top />
          </Route>
          <Route path="/Favorites">
            <Favorites />
          </Route>
          <Route path="/Busqueda">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
