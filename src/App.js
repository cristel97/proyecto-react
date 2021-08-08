
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
//import CartWidget from './components/CartWidget';



//PROPS
const SuperForm=({coder, state}) =>{
  return <h1>{state}</h1>
}


function App() {
  const saludar =()=>{
    alert('hola!')
  }
  const [contador, setContador] =useState(0)
  const [fecha, setFecha] = useState(null)
  
  function handleCount(){
      setContador(contador + 1)
      let date= Date ()
      setFecha(date)
  }

  return (
    <div className="App" style={{backgroundColor: 'whitesmoke'}}>
        
        <NavBar/>
        {contador}<br/>
        {fecha}
        <ItemListContainer/>

        <button onClick={saludar}>Clic aquí</button>    </div>
  );
}

export default App;
