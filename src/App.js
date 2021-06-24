
import './App.css';
import Profilecomponents from './Profile/Profilecomponents';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleAlert=(FullName)=>{
    alert(` ${FullName}`)
  }
  
  return (
    <div className="App">
   <Profilecomponents
    FullName="jihed laribi"
    Bio="I like to code"
    Profession="web developer"
    handleAlert={handleAlert}
    >
  <img src="/eren.png" alt="dev" />
   </Profilecomponents>
   

    </div>
  );
}

export default App;
