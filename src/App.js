import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Referensi from './Pages/Referensi';
import Penyediaan from './Pages/Penyediaan';
import Persediaan from './Pages/Persediaan';
import Pemesanan from './Pages/Pemesanan';
import Pelunasan from './Pages/Pelunasan';
import Header from './Components/Header';
import Footer from './Components/Footer';


// export default function App() {
//   return (
//     <div className="App">
//       <Sidebar> </Sidebar>
//       <Header title="My header" subtitle="subtitle2" />
//       {/* <Main message="My content" /> */}
//       <Footer note="Footer Note" />
//     </div>
//   );
// }



function App() {
  return (
    <BrowserRouter>
      {/* <Header title="My header" subtitle="subtitle2" /> */}
      <Sidebar>
      <Header />
      
      {/* <Main message="My content" /> */}
      
        <Routes>
          <Route path= '/' element={<Referensi/>}/>
          <Route path= '/referensi' element={<Referensi/>}/>
          <Route path= '/penyediaan' element={<Penyediaan/>}/>
          <Route path= '/persediaan' element={<Persediaan/>}/>
          <Route path= '/pemesanan' element={<Pemesanan/>}/>
          <Route path= '/pelunasan' element={<Pelunasan/>}/>
        </Routes>
        
      <Footer />
      </Sidebar>
      {/* <Header title="My header" subtitle="subtitle2" /> */}
      {/* <Footer note="Footer Note" /> */}
      
    </BrowserRouter>
  );
}

export default App;
