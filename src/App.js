import {BrowserRouter,Routes,Route} from 'react-router-dom'

//pages and components
import {Home} from './pages/home.jsx';
import {Upload} from './pages/upload.jsx';
import {Register} from './pages/register.jsx';
import {Login} from './pages/login.jsx';
import {Dashboard} from './pages/dash.jsx';
import {Video} from './components/video.jsx';
import {Fav} from './pages/fav.jsx';
import {Search} from './pages/search.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <div className="pages">
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/upload"element={<Upload/>}/>
            <Route path="/register"element={<Register/>}/>
            <Route path="/login"element={<Login/>}/>
            <Route path="/dashboard"element={<Dashboard/>}/>
            <Route path="/video"element={<Video/>}/>
            <Route path="/fav"element={<Fav/>}/>
            <Route path="/search"element={<Search/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;