import './App.css'
import {useState} from 'react'
import HomePage from './components/HomePage'
import Comments from './components/Comments'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path='/' element={<HomePage info={info} setInfo={setInfo}/>}/>
            <Route path='/issue/:issueNumber'  element={<Comments info={info}/>}/>
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
