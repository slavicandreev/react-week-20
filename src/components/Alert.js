import React from 'react';

// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Alert(props) {
  console.log(props);

  if (props.type === 'danger') {
    return (
      <>
      <h1>Error</h1>
      <div className={`alert alert-${props.type || 'success'}`} role="alert">
        {props.message}
      </div>
      </>
    );
  }
  else if (props.type === 'success') {
    return (
      <>
      <h4>Success</h4>
      <div className={`alert alert-${props.type || 'success'}`} role="alert">
        {props.message}
      </div>
      </>
    );
  }
}

export default Alert;
