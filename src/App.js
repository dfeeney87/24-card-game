import logo from './logo.svg';
import './App.css';
import {Game} from './Game';

const Title = () => {
 return (
   <div className={'app-header'}>Find the matching pairs</div>
 ) 
}


function App() {
  return (
    <div className="App">
      <Title />
      <Game />
    </div>
  );
}

export default App;
