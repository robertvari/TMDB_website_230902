import Footer from "./components/Footer";
import MovieListView from "./components/MovieListView";
import TVShowsView from "./components/TVShowsView";
import PeopleView from "./components/PeopeView";
import MoreView from "./components/MoreView";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import NotFoundPage from "./components/NotFoundPage"
import Navbar from "./components/Navbar";
import "./styles/main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <div>
          <Navbar/>

          <Routes>
            <Route path="/tvshows" element={<TVShowsView/>}/>
            <Route path="/people" element={<PeopleView/>}/>
            <Route path="/more" element={<MoreView/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            
            <Route path="/" element={<MovieListView/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
        
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
