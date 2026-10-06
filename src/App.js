import './App.css';
import Labelnama from './componenst/labelnama';
import Labelalamat from './componenst/labelalamat';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      
        <Labelnama nama="Manzz"   />
        <Labelalamat alamat="Krendang selatan"   />

    </div>
  );
}

export default App;