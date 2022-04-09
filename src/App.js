import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componets/Header/Header'
import SimpleBottomNavigation from './componets/MainNav';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';
import Trending from './pages/Trending/Trending';


function App() {
    
  return (
    <BrowserRouter>
    <Header/> 
    <div className='app'> 
        <Container>
            <Routes>
                <Route path='/' element={<Trending/>} exact/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/series' element={<Series/>}/>
                <Route path='/search' element={<Search/>}/>
            </Routes>
        </Container>
    </div>
    
    </BrowserRouter>
  );
}

export default App