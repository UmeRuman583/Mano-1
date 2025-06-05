
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Text from './components/Text'
// import About from './components/About'

// import {createBrowserRouter , RouterProvider} from 'react-router-dom'




function App() {


// const router =createBrowserRouter([

// { 
//    path:"/" ,
// element :<Text/>

// },
// {
// path : "/about",
// element :<About/>
//  },



// ])


const[ mode , setMode] = useState ('light');

 const showToastD = () => {
    Toastify({
      text: "Darkmode is enabled!",
      duration: 700,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }
 const showToastL = () => {
    Toastify({
      text: "Lightmode is enabled!",
      duration: 700,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }


const [modeh , setmodeH] = useState('darkMode');

const toggleMode =()=>{
if (mode === 'light' ){

setmodeH('lightMode');
setMode('dark');
document.body.style.backgroundColor = 'black';
document.body.style.color ='white';
showToastD();

}
else
{
  
  setmodeH('DarkMode');
  setMode('light');
  document.body.style.backgroundColor = 'white';
document.body.style.color ='black';
showToastL();
}
}



  return (
    <>
{/* 
     <Navbar mode={mode} toggleMode={toggleMode}/>
<RouterProvider router = {router} /> */}
    
        {/* <Navbar title="umeruman" home="homaPage" about="AboutPage"/>   */}
   <Navbar mode={mode} toggleMode={toggleMode}/> 
      <Text/>
{/* <router>
   <Text/>
   <About/>
   </router> */}
    </>
  )
}

export default App
