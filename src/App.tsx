import Home from './views/Home/Home'
import Main from './views/Main/Main';
import { ThemeProvider } from "@mui/material/styles";
import {theme} from './styles/theme'
import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/main" element={<Main/>}/>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App