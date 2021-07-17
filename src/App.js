
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

//EJECUTAR HOLA APP
const HolaApp=() =>{
  return (
  <p>Hola, Cristel</p>
  )
}

function App() {
  let nombre = 'cris'
  // ACA VA EL JS
  const style = {backgroundColor: 'blue', color:"white"}
  const saludar =()=>{
    alert('hola!')
  }

  return (
    <div className="App" style={{backgroundColor: 'blue',color: 'white'}}>
        <NavBar/>
        <HolaApp/>

        <ItemListContainer greeting='Hola soy Cris...' user='Cris'/>
        <button onClick={saludar}>Clic aquí</button>
        
    </div>
  );
}

export default App;
