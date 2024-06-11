import React from 'react';
import Index from './Components/Index';
import Nav from './Axios tutorial/Nav';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Axios tutorial/Signup';

function App() {
return(
     <>
         {/* <Index /> */}

<BrowserRouter>
<Nav />
       <Routes>
            <Route path='/' element={<h1>Product component</h1>}/>
            <Route path='/add' element={<h1>Add Product component</h1>}/>
            <Route path='/update' element={<h1>Update Product component</h1>}/>
            <Route path='/logout' element={<h1>logout Product component</h1>}/>
            <Route path='/profile' element={<h1>profile Product component</h1>}/>
            <Route path='/signup' element={<Signup/>}/>
       </Routes>
</BrowserRouter>
        
    </>
  );
}

export default App;
