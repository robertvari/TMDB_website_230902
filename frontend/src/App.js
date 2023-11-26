import Footer from "./components/Footer";
import MovieListView from "./components/MovieListView";
import TVShowsView from "./components/TVShowsView";
import PeopleView from "./components/PeopeView";
import MoreView from "./components/MoreView";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import MovieDetailsView from "./components/MovieDetailsView";
import ResetPasswordPage from "./components/ResetPasswordPage";
import NotFoundPage from "./components/NotFoundPage"
import Navbar from "./components/Navbar";
import "./styles/main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieProvider } from "./components/contexts/MovieContext";

function App() {
  return (
    <div className="App">
      <MovieProvider>

        <BrowserRouter>
                <div>
            <Navbar/>

            <Routes>
              <Route path="/tvshows" element={<TVShowsView/>}/>
              <Route path="/people" element={<PeopleView/>}/>
              <Route path="/more" element={<MoreView/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/reset-password" element={<ResetPasswordPage/>}/>
              <Route path="/registration" element={<RegistrationPage/>}/>
              <Route path="/movies/:slug" element={<MovieDetailsView/>}/>

              
              <Route path="/" element={<MovieListView/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </div>
          
          <Footer/>
        </BrowserRouter>

      </MovieProvider>
    </div>
  );
}

export default App;
