import Header from "./component/Header/Header";
import Footer from "./component/footer/footer";
import ScrollTop from "./utilities/scrolltop/scrollTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router/router";
import ScrollToTop from "./utilities/scrolltop/scroltotop";
import { useState,useEffect} from "react";
import Loader from "./utilities/Loader";
function App() {
    const [loader,setloader] = useState(true)

    useEffect(()=>{
      let timer = setTimeout(() => setloader(false), 2000);
      return () => {
        clearTimeout(timer);
      };
    });
       

  return (
    <div className="App">
      {loader ? <Loader/>
     :<Router >
       <ScrollToTop/>
        <Header loader={()=>setloader(true)}/>
        <Routers />
        <Footer loader={()=>setloader(true)}/>
        <ScrollTop/>
      </Router>}
    </div>
  );
}

export default App;
