import React from 'react';
import ReactDom from 'react-dom';

// Create a new componemnt This componemnt shoudl procuce some html
const App = () => {
    return <div>Hello world</div>;
}

// Take this component's html generted HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
