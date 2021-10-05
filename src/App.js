//import logo from './logo.svg';
//import './App.css';

import { MostrarAlerta } from "./components/Alerta";
import { Avatar } from "./components/Avatar";



function App() {
  return (
    <div className="App">

      <header className="App-header">

        <MostrarAlerta 
        
        altura="50px"
        ancho ="700px"
        colorFondo="lightblue"
        colorText="red"
        texto="default Alert"
        textSize="50px"
        ></MostrarAlerta>
     
     <MostrarAlerta 
        
        altura="50px"
        ancho ="700px"
        colorFondo="orange"
        colorText="green"
        texto="Succes Alert"
        textSize="50px"
        ></MostrarAlerta>

<Avatar

imagen="100%"

altura="128px"
ancho ="128px"
></Avatar>

   

      </header>

    </div>
  );
}
export default App;
