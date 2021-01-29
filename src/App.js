import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFoubd";

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans container	 mx-auto max-w-4xl	">
        <Navbar />
        <div className="mt-10 mb-auto p-5">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
