import Header from "./component/Header/Header";
import Footer from "./component/footer/footer";
import ScrollTop from "./utilities/scrolltop/scrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router/router";
import ScrollToTop from "./utilities/scrolltop/scroltotop";
function App() {
  return (
    <div className="App">
     <Router>
       <ScrollToTop/>
        <Header/>
        <Routers/>
        <Footer/>
        <ScrollTop/>
      </Router>
    </div>
  );
}

export default App;
