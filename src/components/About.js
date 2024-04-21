import React, { useState } from "react";

export default function About(props) {
  let myStyle ={
    color: props.mode ==='dark'?'white':'#042743',
    backgroundcolor: props.mode ==='dark'?'rgb(36 74 104)':'white',
    // border: '2px solid',
    // bordercolor:props.mode==='dark'?'white':'#042743'
  }
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btntext, setBtnText] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>Analyze Your Text</strong>  
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             <strong>TextUtilis gives you a way to analyze your text quickly and effictively. Be it word count, character count,etc</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong>Free To use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtilis is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtilis reports the number of words and characters. thus it is suitable for writting text wih word /character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             This word counter software works in any web browser such as chrome,firefox,internet explorer,safari.it suits to count characters in facebook,blog,books,excel document,pdf document,eassay ,etc.
            </div>
          </div>
        </div>
      {/* </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {" "}
          {btntext}
        </button> */}
      </div>
    </div>
  );
}
