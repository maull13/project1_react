import './App.css';
import Labelnama from './componenst/labelnama';
import Labelalamat from './componenst/labelalamat';
import Button1 from './componenst/button1';

function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Button1 />

        <Labelnama nama="Hilman"   />
        <Labelalamat alamat="Krendang selatan"   />
        <Button1/>

    </div>
  );
}

export default App;