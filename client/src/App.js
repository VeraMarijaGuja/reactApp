import { Routes, Route } from 'react-router-dom';
import Home from './accommodation/home';
import Accommodations from './accommodation/Accommodations';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations" element={<Accommodations />} />
         
       </Routes>
    </>
 );
};
