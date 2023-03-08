import './App.css';
import PublicSpaces from './Components/PublicSpaces';
import Instruments from './Components/Instruments';

function App() {

  return (
    <div className="App">
      <h1>React Client</h1>
      
      {/* Use fetch to pull data in from an endpoint */}
      {/* <SimpleFetch /> */}

      {/* Fetch the SFPOPOS Data */}

      {/* Challenge: After testing the components above make your own component. 
      See the challenges in express-server/server.js. You'll make your own route 
      that serves your own json data. 
      Create a component in this project that display that data. */}

      <PublicSpaces />
      <Instruments/>
    </div>
  );
}

export default App;
