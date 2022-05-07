// import Home from "./view/Home";
import About from "./view/About";
import Header from "./component/Header/Header";
import Footer from "./component/footer/footer";
import ScrollTop from "./utilities/scrolltop/scrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <About/>
      <ScrollTop/>
      <Footer/>
    </div>
  );
}

export default App;
