import Footer from "./components/Footer";
import MovieListView from "./components/MovieListView";
import Navbar from "./components/Navbar";
import "./styles/main.css"

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <MovieListView/>
      </div>

      
      <Footer/>
    </div>
  );
}

export default App;
