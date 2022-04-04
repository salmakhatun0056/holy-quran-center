import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import DashBoard from './Components/DashBoard/DashBoard'
import Blogs from './Components/Blogs/Blogs'
import About from './Components/About/About'
import NotFount from './Components/NoFount/NotFount';
import Header from './Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='*' element={<NotFount></NotFount>}></Route>
      </Routes>
    </div>
  );
}

export default App;
