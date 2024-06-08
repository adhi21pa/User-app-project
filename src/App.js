import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import SearchUser from './components/SearchUser';
import DeletePhoto from './components/DeletePhoto';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route>
        <Route path='/' element ={<AddUser/>}/>
        <Route path='/search' element ={<SearchUser/>}/>
        <Route path='/delete' element ={<DeletePhoto/>}/>
        <Route path='/viewall' element ={<ViewAll/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
