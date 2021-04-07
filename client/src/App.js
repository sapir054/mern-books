
import {useEffect,useState} from 'react'
import './App.css';
import AppRouter from './router'
import {callMyServer} from './service/book-service'

function App() {
  const [result, setResult] = useState({})
  useEffect(() => {
    
  }, [])

  function callBasicApi(){
    callMyServer().then((res) =>{setResult(res)})
  }
  return (
    <div className="App">
      {result}
     
    </div>
  );
}

export default App;
