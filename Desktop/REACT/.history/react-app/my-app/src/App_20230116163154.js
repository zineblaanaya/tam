import logo from './logo.svg';
import './App.css';

const myself= {
  Fisrtname: "zineb",
  Lastname : "Laanaya"
}



function capitalized(str){
  return str[0].toUpperCase()

}

function App(Name) {
  return (

    <div className="App">
    <h2>{myself.Fisrtname}</h2> 
    </div>
  );
}



 



export default App;
