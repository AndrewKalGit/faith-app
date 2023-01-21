import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Banner';
import Nav from './Nav';
import About from './About';
import Footer from './Footer';
import Staff from './Staff';
import Sermons from './Sermons';
import BibleStudy from './BibleStudy';
import Events from './Events';

//Tailwind production speed 
//Helmet for each route components 

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
          <Route path='/sermons' element={<><Sermons embedId='H-pr6ipK43E'/></>}></Route>
          <Route path='/biblestudy' element={<><BibleStudy></BibleStudy></>}></Route>
          <Route path='/events' element={<><Events></Events></>}></Route>
        </Routes> 
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
