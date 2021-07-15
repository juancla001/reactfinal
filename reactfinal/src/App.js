
import './App.css';
import NavBar from './components/NavBar';
import PubList from './components/PubList';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <>
      <NavBar user={null}/>
      <Carousel/>
      <PubList/>
    </>
  );
}
export default App;
