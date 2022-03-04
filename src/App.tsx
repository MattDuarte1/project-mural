import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Summary } from "./components/Summary";
import { Dashboard } from "./components/Dashboard";


const App = () => {
  
  return(
    <>
     <Header />
       <Summary />
       <Dashboard />
     <GlobalStyle />
    </>
    
  );
}



export default App;


