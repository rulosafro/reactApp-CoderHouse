import './App.sass'
import { Navbar } from "./components/Navbar/Navbar.js"
import { Contenedor } from "./components/Contenedor/Contenedor.js"
import { MyButton } from "./components/MyButton/MyButton.js"
import { Clicker} from './components/Clicker/Clicker.js'

function App() {

  return (
    <div> 
      <Navbar/>
      <Contenedor>
        {/* <h2> Hello</h2>
        <p> Chanchito Feliz   </p> */}
        <MyButton text='hola' variant={1}/>
        <Clicker/>
      </Contenedor>
    </div>
  )
}

export default App
