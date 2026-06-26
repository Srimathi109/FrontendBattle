import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trusted from "./components/Trusted/Trusted";
import Overview from "./components/Overview/Overview";
import Bento from "./components/Bento/Bento";
import Footer from "./components/Footer/Fotter";
import Pricing from "./components/Pricing/BillingToggle";
function App(){

return(

<>

<Header/>

<Hero/>

<Trusted/>

<Overview/>

<Bento/>

<Pricing annual={false} onToggle={function (): void {
      throw new Error("Function not implemented.");
    } }/>

<Footer/>
</>

);

}

export default App;