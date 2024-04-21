import React from "react";

function alert(props) {
  const captialize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); //captilaize the key
  }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{captialize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  );
}

export default alert;
