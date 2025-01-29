import React, {useState} from 'react'

export default function TextForm(props) {
    const handle=()=>{
        let newText=text.toUpperCase();
        
        setText(newText)
        props.showAlert("Text has been converted to Uppercase","Success");
    }
    const handlelower=()=>{
      let newt=text.toLowerCase();
      setText(newt);
      props.showAlert("Text has been converted to lowercase","Success");
    }
    const handleclear=()=>{
      let newc="";
      setText(newc);
      props.showAlert("Text has been cleared","Success");
    }
    const handlec=(event)=>{
        console.log("anythng");
        setText(event.target.value)
    }
   const handlecopy=()=>{
      var text=document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text has been copied","Success");
      
    }
  const[text,setText]=useState('Enter your text here')
    return (
        <>
    <div className="container" style={{ color: props.mode === 'light' ? 'dark' : 'light' }}>
  <h1>{props.heading}</h1>


<div className="mb-3">
 
  <textarea className="form-control" id="mybox" onChange={handlec} value={text} style={{backgroundColor:props.toggleMode==='dark'?'grey':'white'}} rows="8"></textarea>

</div>
<button className="btn btn-primary mx-1 my-1" onClick={handle}> Uppercase </button>
<button className="btn btn-danger mx-1 my-1" onClick={handlelower}> Lowercase </button>
<button className="btn btn-secondary mx-1 my-1" onClick={handleclear}>Clear </button>
<button className="btn btn-primary mx-1 my-1" onClick={handlecopy}> copy </button>


      </div>
      <div className='container my-3'>
        <h3>your text summary</h3>
        <p>{text.split(" ").filter((element=>{return element!==0})).length} words and {text.length} characters</p>
      </div>
      </>
    );
  }

