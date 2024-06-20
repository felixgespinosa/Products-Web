
import './App.css';
import React, {useState,useEffect} from 'react';

import { Routes } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
import SearchPage from './SearchPage';
import {mockdata} from './constants/products'
import CONFIG from './config/config'
import NotFound from "./NotFound"
import { Route } from "react-router-dom";
import Producto from './routes/Producto';


/*const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes/>
  </BrowserRouter>
)
*/
function App() {

const [loading, setLoading]=useState(true);
const [data,setData]=useState();


const download = async () => {
  let downloadedProducts;
  try{
    const res=await fetch(CONFIG.server_url);
    downloadedProducts=await res.json();
  }catch(e){
    alert("No se ha podido recuperar la información.");
  }
  setData(downloadedProducts.products);
  console.log(downloadedProducts);
}




useEffect(()=>{
  async function fetchData(){
    if(CONFIG.use_server){
      await download();
    }else{
      setData(mockdata.products);
    }
    
    setTimeout(()=>{
      setLoading(false);
    },CONFIG.loading_timeout_ms);
  }
  fetchData();
},[])




  return (
<div className="App">
{
    loading ? (
      <div id="loading" className='spinner'> <RingLoader color="#36d7b7" loading={loading}/></div>
     
    ):(
   
      
     <Routes>
     
                <Route path='/' element={<SearchPage numitems={CONFIG.num_items} theproducts={data}/>} />
                <Route path='products/:productId' element={<Producto theproducts={data}/>} />
                <Route path='*' element={<NotFound />}/>
               
         
     </Routes>
    
      
    

    )
   } 
</div>
   

  );
}

export default App;
