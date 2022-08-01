import "./App.scss";
import "swiper/swiper.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routess from "./config/Routess";

function App() {
  return (
    <BrowserRouter>
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <Routess />
              <Footer />
            </>
          )}
        />
    </BrowserRouter>
  );
}

export default App;
