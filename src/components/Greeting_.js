import React, { useState } from 'react';

function Greeting2(props) {

    let [name, setName] = useState("Slavic");

    const listOfTopics = [
        'React',
        'Components',
        'Props',
        'Babel',
        'Webpack'
    ]

    let [topics, addTopic] = useState(listOfTopics);

    let handleClick = () => {
        console.log("in click handler");
        setName("John");
    }

    let handleTopicClick = () => {
        console.log("in topic click handler");
        addTopic([...topics, 'Hooks']); // topics = ['Hooks']
    }

    return (
        <>
            <h1>Welcome to my React app! My name is {name}</h1>
            <p>Today we will be learning about the following:</p>
            <ul className="parent">
            {
                topics.map((topic, i) => <li id={i}>{topic}</li>)
            }
            </ul>
            <button onClick={handleClick}>Change the name</button>
            <button onClick={handleTopicClick}>Add a topic</button>
        </>
    )
}

export default Greeting2