
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AddForm} from './components/AddForm'
import {Listing} from './components/Listing'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="container center">
      <Header />      
      <Balance />  
      <div className="mt-4">
      <AddForm /> 
      <Listing /> 
      </div>   
    </div>
    </GlobalProvider>
  );
}

export default App;
