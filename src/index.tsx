import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import NotFouund from './screens/NotFouund';
import './index.scss';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/atlana-task/:login" element={<SecondScreen />}></Route>
        <Route path="/atlana-task" element={<FirstScreen />}></Route>
        
        
        <Route path='*' element={<NotFouund />}></Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


