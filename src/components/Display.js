import React, { useState, useEffect } from 'react';

export default function Display() {

  const [count, setCount] = useState(Number(localStorage.getItem('myCount')));
  const [test, setTest] = useState("This is test message");
  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log("Refreshed counter");

    localStorage.setItem('myCount', count);
  }, [count]);

  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log("Refreshed test message");
  }, [test]);

  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log("Rendered first time");

    return () => alert("Removed");
  }, []);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleClick = () => {
    setTest("This is updated test message");
    console.log("refreshed test message");
  };


  return (
    <div>
      <p>You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click me
      </button>
      <button type="button" onClick={handleClick}>Modify something else</button>
      <br />
      {test}
    </div>
  );
}

      
{/* <button type="button" onClick={handleClick}>
Update something else
</button> */}