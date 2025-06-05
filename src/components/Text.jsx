import React , {useState}from 'react'
import '../../src/components/Text.css'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



export default function Text(props) {
  
  

     


     const [text, setText] = useState("Enter your Text");
const handleUpperCase=()=>{
  // console.log("uppercase is clicked");
  let newText = text.toUpperCase();
  setText(newText);
  
}


  const showToastU = () => {
    Toastify({
      text: "Text converted to Uppercase!",
      duration: 1500,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }



const handleLcase=()=>{

let newText=text.toLowerCase();
setText(newText);
      
}

  const showToastL = () => {
    Toastify({
      text: "Text converted to lowercase!",
      duration: 1500,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }


const handleClear=()=>{
 let newText = "";
  setText(newText);
}

  const showToastC = () => {
    Toastify({
      text: "Text is Cleared!",
      duration: 1500,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }


  const toCapitalizeFirstLetter = () => {
    if (!text) return;
    let newText =(text[0].toUpperCase() + text.slice(1).toLowerCase());
 setText(newText);
 
  };


  const showToastF = () => {
    Toastify({
      text: "Text converted to Titlecase!",
      duration: 1500,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }



  const toCapitalizeEachWord = () => {
     let newText=(
      text.replace(/\b\w/g, (char) => char.toUpperCase())
    );
     setText(newText);
  };


  
  const showToastE = () => {
    Toastify({
      text: "Text converted to Allcaps!",
      duration: 1500,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }


  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  };


  const showToastX = () => {
    Toastify({
      text: "ExtraSpaces are removed!",
      duration: 1500,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }


  const copyToClipboard = () => {
    var text = document.getElementById("my-box")
    text.select();
    navigator.clipboard.writeText(text.value);
  };


  const showToastP = () => {
    Toastify({
      text: "Text is copied to clipboard!",
      duration: 1500,
      gravity: "top",
      position: "center",
      backgroundColor: "#A94A4A"
    }).showToast();
  }




const handleChange=()=>{
  console.log("ONchange is clicked")
  setText(event.target.value)
}
  return (
 <> 
   <div>
      
<h3  className=" xyz mt-4 px-4"  > {Text.props??"Your Text here"} </h3>

<div className="container">   
<textarea  id="my-box" className=" centered-textarea " value={text} onChange={handleChange} > </textarea>
</div> 
<div className='button-container'>
<button type="button" className="centered-button btn btn-secondary" onClick={()=>{handleUpperCase()
  showToastU()
}}    >Convert to UpperCase</button>
<br />
<button type="button" className="L-button btn btn-info "onClick= {()=>{showToastL()
   handleLcase()}} >Convert to Lower case</button>
  
  <br />
  <button type="button" className="L-button btn btn-success " onClick={()=>{toCapitalizeFirstLetter()
    showToastF()
  }}> CapitalizeFirstLetter</button>
<br />
  <button type="button" className="L-button btn btn-warning " onClick={()=>{toCapitalizeEachWord()
  showToastE()}}> CapitalizeEachLetter</button>
<br />
  <button type="button" className="L-button btn btn-dark " onClick={()=>{removeExtraSpaces()
showToastX()}
  }> Extra spaces Remover</button>
<br />
  <button type="button" className="L-button btn btn-primary " onClick={()=>{copyToClipboard()
    showToastP()
  }}> Copy</button>
<br />
<button type="button" className="L-button btn btn-danger " onClick={()=>{handleClear()
showToastC()}
}>Clear</button>



   </div> 

    </div>

<h2 className=" xyz mt-2 px-4" >Your Text Summary </h2>
<div className='px-5'>


      Word Count: {text.trim().split(/\s+/).filter(Boolean).length}
       <br/>
       Character Count: {text.length} <br/>
      minutes to read : {0.008 *text.trim().split(/\s+/).filter(Boolean).length }
</div>
{/* <p>{text.split(" ").lenght} words and {text.lenght} characters  </p> */}

<h2   className=" xyz mt-2 px-4" >Your Text Preview </h2>

<p className=" xyz mt-2 px-4" >{text}</p>


<ToastContainer position="top-center"/>

</> 

  )
}
