import logo from './logo.svg';
import './App.css';
import button from 'components/button';


function App() {
  const name = 'Bob'
  return(
    <div className= "App">
      <button name = {name}/>
    </div>
  );
   
}

export default button;
