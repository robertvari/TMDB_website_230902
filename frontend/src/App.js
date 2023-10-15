import Footer from "./components/Footer";
import MovieListView from "./components/MovieListView";
import Navbar from "./components/Navbar";
import "./styles/main.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MovieListView/>
      <Footer/>
    </div>
  );
}

export default App;
