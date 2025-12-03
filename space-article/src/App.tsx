import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/Article';
import MyNavbar from './components/MyNavbar';
import Details from './components/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar/>
        <Routes>
          <Route path={'/'} element={<Article/>}/>
          <Route path={'/details/:id'} element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
