import React from 'react';

export default function Welcome(props) {
  const name = props.name ?? 'students!';
  const topics = [
    'React',
    'Components',
    'Props',
    'Babel'
  ]
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>Hello {name}!</h1>
      <p>Today we will be learning about the following:</p>
      <ul className="parent">
        {
          topics.map(topic => <li>{topic}</li>)
        }
      </ul>
    </div>
  );
}
