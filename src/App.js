import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Navigation/Layout";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location, "location");
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Layout>
            <Route path="/Works" exact>
              <Works />
            </Route>

            <Route path="/About" exact>
              <About />
            </Route>

            <Route path="/Contact" exact>
              <Contact />
            </Route>

            {/* <Route path="*">
              <Redirect to="/" />
            </Route> */}
          </Layout>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
