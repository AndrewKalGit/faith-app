import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Banner';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import Staff from './Staff';
import Sermons from './Sermons';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8'/>
        <title> Faith </title>
      </Helmet>
      <Router>
        <Nav></Nav>  
        <Routes>
          <Route path='/' element={<><Banner></Banner></>}></Route>
          <Route path='/about' element={<><About></About></>}></Route>
          <Route path='/staff' element={<><Staff></Staff></>}></Route>
          <Route path='/sermons' element={<><Sermons embedId='https://www.youtube.com/watch?v=H-pr6ipK43E'/></>}></Route>
        </Routes> 
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
