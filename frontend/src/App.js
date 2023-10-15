import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidepanel from "./components/Sidepanel";
import "./styles/main.css"

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="content">
        <Content/>
        <Sidepanel/>
      </div>


      <Footer/>
    </div>
  );
}

export default App;
