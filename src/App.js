import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="container mx-auto max-w-4xl	">
      <Navbar />
      <div className="mt-10 mb-auto p-5">
        <Home />
      </div>
    </div>
  );
}

export default App;
