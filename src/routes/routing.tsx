import { Routes, Route } from "react-router-dom";
import Home from "views/home/home";
import Overview from "views/overview/overview";
import NotFound from "views/not-found/not-found";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/overview" element={<Overview />}></Route>
    <Route path="*" element={<NotFound />}></Route>
  </Routes>
);
export default Routing;
