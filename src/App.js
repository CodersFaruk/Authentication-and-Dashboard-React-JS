import Layout from './layouts/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
