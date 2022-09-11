import LoginPage from "./Login";
import QuestionPage from "./QuestionSection";
import InstructionPage from './Instructions';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DataState from "./contextApi/dataState";
import Secrets from "./Secrets";
import EndPage from "./EndingPage";

function App() {
  return (
    <BrowserRouter>
     <DataState>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Secrets/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/instructions' element={<InstructionPage/>}/>
        <Route exact path='/questionpage' element={<QuestionPage/>}/>
        <Route exact path='/endpage' element={<EndPage/>}/>

      </Routes>
    </div>
    </DataState>
    </BrowserRouter>
  );
}

export default App;
