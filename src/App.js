
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Series from './components/Series'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SeriesId from './components/SeriesId';


function App() {
  

  return (
    
    <Router>
      <Navbar/>
    
      
      <Switch>
      <Route exact path="/">
    
      <Home/>
      </Route>
      <Route path="/series">
      <Series />
      <Route path=":id" element={<SeriesId />} />
      
      </Route >

      
      
      
      

      </Switch>
      
      
       
      
     
      </Router>
  );
}

export default App;
