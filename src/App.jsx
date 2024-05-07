
import './App.css'
import Card from './Componentes/Card';
import lenguajes from "./datos/lenguajes";

function App() {

  const ListasLenguajes = lenguajes.map((l,index) => {
  return <Card key={index} titulo={l.ntitulo} descripcion={l.ndescripcion} />
  })

 return (
      <div className='App'>
        <h1>Lenguajes de Programacion </h1>
        <div className='container'>
        {ListasLenguajes}
        </div>        
      </div>
     
  )
}

export default App

