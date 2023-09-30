import Home from './views/Home/Home'
import Main from './views/Main/Main';
import { ThemeProvider } from "@mui/material/styles";
import {theme} from './styles/theme'
import CardContextProvider from "./Context/cardContext"
import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CardContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/main" element={<Main/>}/>
      </Routes>
      </CardContextProvider>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
