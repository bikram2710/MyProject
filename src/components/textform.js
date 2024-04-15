import React,{useState} from 'react'
export default function Textform(props) {
    const handleUpClick= ()=>{
 //       console.log("upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick= ()=>{
        //       console.log("upper case was clicked" + text);
               let newText = text.toLowerCase();
               setText(newText)
               props.showAlert("Converted to Lowercase","success")
           }
    const handleonChange= (event)=>{
        console.log("on change",event.target.value);
        setText(event.target.value);
    }
    const handleCopy = () => {
      console.log("i am copy")
      var text = document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success") 
    }
    const handleExtraSpaces =() =>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed","success") 
    }
    const handleClearClick = () => {
       let newText=("");
       setText(newText)
       props.showAlert("Text Cleared","success")   
    };
    const [text, setText] = useState('');
//    text="new text"; // wrong way to change the state
//    setText("new text"); // correct eay
  return (
    <>
    <div className="container" style={{color: props.mode===`dark`?`white`:`#042743`}} >
        <h1>{props.heading} </h1>
<div className="mb-3">
  <label htmlFor="mybox" className="form-label">Example Textarea</label>
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode===`dark`?`grey`:`white`,color: props.mode===`dark`?`white`:`#042743`}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode ===`dark`?`white`:`#042743`}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something In The Textbox Above To Preview "}</p>
    </div>
    </>
  )
}
