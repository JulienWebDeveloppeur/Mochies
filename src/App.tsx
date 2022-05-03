import "./App.less";
import { hot } from "react-hot-loader/root";
import LayoutNav from "./components/core/layout/layout-nav";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "routes/routing";

const App = () => (
  <Router>
    <header>
      <LayoutNav></LayoutNav>
    </header>
    <section className="p-12 py-0 full-page" style={{ paddingTop: "88px" }}>
      <Routing></Routing>
    </section>
  </Router>
);

export default hot(App);
